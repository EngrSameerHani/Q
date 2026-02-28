'use client'
import React, { useCallback, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import Multiselect from 'multiselect-react-dropdown'
import { FaPlus, FaMinus } from 'react-icons/fa'
import {
  ConsultantCreateAction,
  ConsultantEditAction,
  UploadFileAction,
} from '@/app/_actions/_actions'
import { getDepartments } from '@/app/lib/getDepartments'
import {
  editConsultantSchema,
  EditConstultantSchema,
} from '@/app/utils/ValidationSchema'
import 'react-quill-new/dist/quill.snow.css'
import { getConsultantById } from '@/app/lib/getConsultants'
import Loader from './Loader'
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

// Define the Education interface and update initial state as an array
interface Education {
  degree: string
  institute: string
  year: string
}

interface DepartmentData {
  id: number
  title: string
  description: string
  image: string
  user_id: number
  created_at: Date
}

interface ConsultantData {
  status: string
  message: string
  data: {
    id: number
    name: string
    email: string
    password: string
    office_extension: string
    work_experience: string
    membership: string
    education: Education[]
    photo: string
    departments: DepartmentData[]
    residency: string
    diploma: string
    certification: string
    award: string
    extra_info: string
  }
}

const EditConsultant = ({ id }: { id: number }) => {
  const [consultantId, setConsultantId] = useState<number>(id)
  const [selectedDepartments, setSelectedDepartments] = useState<
    DepartmentData[]
  >([])
  const [departments, setDepartments] = useState<DepartmentData[]>([])

  const initialEducation: Education[] = [
    { degree: '', institute: '', year: '' },
  ]

  const [isLoading, setIsLoading] = useState(true)
  const [isImageUploaded, setIsImageUploaded] = useState(false)

  // Form state
  const [myForm, setMyForm] = useState<EditConstultantSchema>({
    name: '',
    email: '',
    office_extension: '',
    work_experience: '',
    membership: '',
    education: initialEducation,
    photo: '',
    residency: '',
    diploma: '',
    departments: [],
    certification: '',
    award: '',
    extra_info: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof EditConstultantSchema]?: string
  }>({})

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetch departments
        const departmentsRes = await getDepartments()
        setDepartments(departmentsRes.data)

        // Fetch consultant data
        const consultantRes: ConsultantData = await getConsultantById(
          consultantId
        )
        if (consultantRes.status === 'success') {
          const consultantData = consultantRes.data

          const education =
            consultantData?.education?.length > 0
              ? consultantData?.education
              : [{ degree: '', institute: '', year: '' }]

          // Update form state with loaded data
          setMyForm({
            name: consultantData?.name || '',
            email: consultantData?.email || '',
            office_extension: consultantData?.office_extension.toString() || '',
            work_experience: consultantData?.work_experience || '',
            membership: consultantData?.membership || '',
            education: education,
            photo: consultantData?.photo || '',
            residency: consultantData?.residency || '',
            diploma: consultantData?.diploma || '',
            departments: consultantData?.departments?.map((item) =>
              item.id.toString()
            ),
            certification: consultantData.certification || '',
            award: consultantData.award || '',
            extra_info: consultantData.extra_info || '',
          })

          setSelectedDepartments(consultantData.departments)
        }
      } catch (error) {
        toast.error('Failed to load consultant data')
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialData()
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }))
  }, [])

  // Handler for file upload (photo)
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setIsImageUploaded(true)
    const files = e.target.files
    if (!files) return
    const filePath = files[0]
    const formData = new FormData()
    formData.append('file', filePath)
    const res = await UploadFileAction(formData)
    if (res.status === 'success') {
      toast.success(res.message)
      setMyForm({ ...myForm, photo: res.data.file_path })
      setIsImageUploaded(false)
      setIsLoading(false)
    } else {
      toast.error(res.message)
      setIsImageUploaded(false)
      setIsLoading(false)
    }
  }

  // Handlers for dynamic education fields
  const handleEducationChange = useCallback(
    (index: number, field: keyof Education, value: string) => {
      setMyForm((prevForm) => {
        const newEducations = [...prevForm.education]
        newEducations[index] = { ...newEducations[index], [field]: value }
        return { ...prevForm, education: newEducations }
      })
    },
    []
  )

  const handleAddEducation = useCallback(() => {
    setMyForm((prevForm) => ({
      ...prevForm,
      education: [
        ...prevForm.education,
        { degree: '', institute: '', year: '' },
      ],
    }))
  }, [])

  const handleRemoveEducation = useCallback((index: number) => {
    setMyForm((prevForm) => {
      const newEducations = [...prevForm.education]
      newEducations.splice(index, 1)
      return { ...prevForm, education: newEducations }
    })
  }, [])

  // Quill modules and formats for membership and work_experience editors
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['code-block', 'formula'],
      ['clean'],
    ],
  }

  const formats = [
    'background',
    'bold',
    'color',
    'font',
    'code',
    'italic',
    'link',
    'size',
    'strike',
    'script',
    'underline',
    'blockquote',
    'header',
    'indent',
    'list',
    'align',
    'direction',
    'code-block',
    'formula',
    'image',
    'video',
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = editConsultantSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('name', result.data.name)
      formData.append('email', result.data.email)
      formData.append('office_extension', result.data.office_extension)
      formData.append('photo', result.data.photo)
      formData.append('membership', result.data.membership)
      formData.append('education', JSON.stringify(result.data.education))
      formData.append('work_experience', result.data.work_experience)
      formData.append('residency', result.data.residency)
      formData.append('certification', result.data.certification)
      formData.append('diploma', result.data.diploma)
      formData.append('award', result.data.award)
      formData.append('extra_info', result.data.extra_info)
      formData.append(
        'departments',
        JSON.stringify(result.data.departments.map(Number))
      )
      const res = await ConsultantEditAction(formData, consultantId)
      if (res.status === 'success') {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } else {
      const fieldErrors: { [key in keyof EditConstultantSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof EditConstultantSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
      console.log('Field errors:', fieldErrors)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Edit Consultant</h2>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={`https://qih.driveo.pk/${myForm.photo}`}
                  alt="consultant photo"
                  width={300}
                />
              </div>
              <div className="login-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Name */}
                    <div className="col-6">
                      <label className="fw-bold text-black">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Enter Consultant Name"
                        value={myForm.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                      )}
                    </div>
                    {/* Email */}
                    <div className="col-6">
                      <label className="fw-bold text-black">Email</label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={myForm.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                      )}
                    </div>

                    {/* Office Extension */}
                    <div className="col-6">
                      <label className="fw-bold text-black">
                        Office Extension
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="office_extension"
                        placeholder="Enter office extension"
                        value={myForm.office_extension}
                        onChange={handleChange}
                      />
                      {errors.office_extension && (
                        <p className="text-danger">{errors.office_extension}</p>
                      )}
                    </div>
                    {/* Photo */}
                    <div className="col-6">
                      <label className="fw-bold text-black">Photo</label>
                      <input
                        name="photo"
                        type="file"
                        className="form-control text-center"
                        onChange={handleUpload}
                      />
                      {errors.photo && (
                        <p className="text-danger">{errors.photo}</p>
                      )}
                    </div>
                    {/* Departments */}
                    <div className="col-6">
                      <label className="fw-bold text-black mb-2">
                        Select Department
                      </label>
                      <Multiselect
                        placeholder="Select Department"
                        className="mb-5"
                        options={departments}
                        showArrow={true}
                        selectedValues={selectedDepartments}
                        onRemove={(selectedList: DepartmentData[]) => {
                          setSelectedDepartments(selectedList)
                          setMyForm({
                            ...myForm,
                            departments: selectedList.map((item) =>
                              item.id.toString()
                            ),
                          })
                        }}
                        displayValue="title"
                        onSelect={(selectedList: DepartmentData[]) => {
                          setSelectedDepartments(selectedList)
                          setMyForm({
                            ...myForm,
                            departments: selectedList.map((item) =>
                              item.id.toString()
                            ),
                          })
                        }}
                      />
                      {errors.departments && (
                        <p className="text-danger">{errors.departments}</p>
                      )}
                    </div>
                    {/* Dynamic Education Fields */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Education</label>
                      {myForm.education?.map((edu, index) => (
                        <div
                          key={index}
                          className="education-row d-flex align-items-center mb-2"
                        >
                          <input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            value={edu.degree}
                            onChange={(e) =>
                              handleEducationChange(
                                index,
                                'degree',
                                e.target.value
                              )
                            }
                            className="form-control me-2"
                          />
                          <input
                            type="text"
                            name="institute"
                            placeholder="Institute"
                            value={edu.institute}
                            onChange={(e) =>
                              handleEducationChange(
                                index,
                                'institute',
                                e.target.value
                              )
                            }
                            className="form-control me-2"
                          />
                          <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            value={edu.year}
                            onChange={(e) =>
                              handleEducationChange(
                                index,
                                'year',
                                e.target.value
                              )
                            }
                            className="form-control me-2"
                          />
                          {myForm.education.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveEducation(index)}
                              className="me-2"
                            >
                              <FaMinus />
                            </button>
                          )}
                          {index === myForm.education.length - 1 && (
                            <button type="button" onClick={handleAddEducation}>
                              <FaPlus />
                            </button>
                          )}
                        </div>
                      ))}
                      {errors.education && (
                        <p className="text-danger">{errors.education}</p>
                      )}
                    </div>
                    {/* Membership using ReactQuill */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Membership</label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.membership}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm((prevForm) => ({
                            ...prevForm,
                            membership: value,
                          }))
                        }
                      />
                      {errors.membership && (
                        <p className="text-danger">{errors.membership}</p>
                      )}
                    </div>
                    {/* Work Experience using ReactQuill */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">
                        Work Experience
                      </label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.work_experience}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm((prevForm) => ({
                            ...prevForm,
                            work_experience: value,
                          }))
                        }
                      />
                      {errors.work_experience && (
                        <p className="text-danger">{errors.work_experience}</p>
                      )}
                    </div>

                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Residency</label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.residency}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm((prevForm) => ({
                            ...prevForm,
                            residency: value,
                          }))
                        }
                      />
                      {errors.residency && (
                        <p className="text-danger">{errors.residency}</p>
                      )}
                    </div>
                    {/* Diploma using ReactQuill */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Diploma</label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.diploma}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm((prevForm) => ({
                            ...prevForm,
                            diploma: value,
                          }))
                        }
                      />
                      {errors.diploma && (
                        <p className="text-danger">{errors.diploma}</p>
                      )}
                    </div>
                    {/* Certifications using ReactQuill */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">
                        Certifications
                      </label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.certification}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm((prevForm) => ({
                            ...prevForm,
                            certification: value,
                          }))
                        }
                      />
                      {errors.certification && (
                        <p className="text-danger">{errors.certification}</p>
                      )}
                      {/* Awards using ReactQuill */}
                      <div className="col-12 mb-5 mt-5">
                        <label className="fw-bold text-black">Awards</label>
                        <ReactQuill
                          theme="snow"
                          modules={modules}
                          formats={formats}
                          value={myForm.award}
                          style={{ height: '200px' }}
                          onChange={(value) =>
                            setMyForm((prevForm) => ({
                              ...prevForm,
                              award: value,
                            }))
                          }
                        />
                        {errors.award && (
                          <p className="text-danger">{errors.award}</p>
                        )}
                        {/* Extra-info usin ReactQuill */}
                        <div className="col-12 mb-5 mt-5">
                          <label className="fw-bold text-black">
                            Extra_info
                          </label>
                          <ReactQuill
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            value={myForm.extra_info}
                            style={{ height: '200px' }}
                            onChange={(value) =>
                              setMyForm((prevForm) => ({
                                ...prevForm,
                                extra_info: value,
                              }))
                            }
                          />
                          {errors.extra_info && (
                            <p className="text-danger">{errors.extra_info}</p>
                          )}
                        </div>
                        {/* Submit Button */}
                        <div className="col-12">
                          <button
                            disabled={isImageUploaded}
                            className="btn btn--secondary btn-line btn-line-before btn--block"
                            style={{ width: '200px' }}
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="login-result"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditConsultant
