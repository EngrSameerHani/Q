'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import Multiselect from 'multiselect-react-dropdown'
import { FaPlus, FaMinus } from 'react-icons/fa'
import {
  ConsultantCreateAction,
  UploadFileAction,
} from '@/app/_actions/_actions'
import { getDepartments } from '@/app/lib/getDepartments'
import {
  consultantSchema,
  ConstultantSchema,
} from '@/app/utils/ValidationSchema'
import 'react-quill-new/dist/quill.snow.css'
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

const CreateConsultant = () => {
  // Set initial education as an array with one empty entry
  const initialEducation: Education[] = [
    { degree: '', institute: '', year: '' },
  ]

  // Update your form state type (ConstultantSchema) so that education is an array
  const [myForm, setMyForm] = useState<ConstultantSchema>({
    name: '',
    email: '',
    password: '',
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
    [key in keyof ConstultantSchema]?: string
  }>({})
  const [selectedDepartments, setSelectedDepartments] = useState<
    DepartmentData[]
  >([])
  const [departments, setDepartments] = useState<DepartmentData[]>([])

  const [isImageUploaded, setIsImageUploaded] = useState(false)

  useEffect(() => {
    const getAllDepartments = async () => {
      const res = await getDepartments()
      setDepartments(res.data)
    }
    getAllDepartments()
  }, [])

  // Handler for file upload (photo)
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
    } else {
      toast.error(res.message)
      setIsImageUploaded(false)
    }
  }

  // Generic input change handler for text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm({ ...myForm, [name]: value })
    if (errors[name as keyof ConstultantSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  // Handlers for dynamic education fields
  const handleEducationChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const newEducations = [...myForm.education]
    newEducations[index] = { ...newEducations[index], [field]: value }
    setMyForm({ ...myForm, education: newEducations })
  }

  const handleAddEducation = () => {
    setMyForm({
      ...myForm,
      education: [...myForm.education, { degree: '', institute: '', year: '' }],
    })
  }

  const handleRemoveEducation = (index: number) => {
    const newEducations = [...myForm.education]
    newEducations.splice(index, 1)
    setMyForm({ ...myForm, education: newEducations })
  }

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
    // Inline formats
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
    // Block formats
    'blockquote',
    'header',
    'indent',
    'list',
    'align',
    'direction',
    'code-block',
    // Embeds
    'formula',
    'image',
    'video',
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = consultantSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('name', result.data.name)
      formData.append('email', result.data.email)
      formData.append('office_extension', result.data.office_extension)
      formData.append('photo', result.data.photo)
      formData.append('password', result.data.password)
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
      const res = await ConsultantCreateAction(formData)
      if (res.status === 'success') {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } else {
      const fieldErrors: { [key in keyof ConstultantSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ConstultantSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Create Consultant</h2>
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
                    {/* Password */}
                    <div className="col-6">
                      <label className="fw-bold text-black">Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={myForm.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <p className="text-danger">{errors.password}</p>
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
                    {/* Work Experience using ReactQuill */}
                    <div className="col-12 mb-5 mt-5">
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
                          setMyForm({ ...myForm, work_experience: value })
                        }
                      />
                      {errors.work_experience && (
                        <p className="text-danger">{errors.work_experience}</p>
                      )}
                    </div>
                    {/* Dynamic Education Fields */}
                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Education</label>
                      {myForm.education.map((edu, index) => (
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
                          {/* Render remove button if there is more than one education entry */}
                          {myForm.education.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveEducation(index)}
                              className="me-2"
                            >
                              <FaMinus />
                            </button>
                          )}
                          {/* Render the plus button on the last row */}
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
                          setMyForm({ ...myForm, membership: value })
                        }
                      />
                      {errors.membership && (
                        <p className="text-danger">{errors.membership}</p>
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
                          setMyForm({ ...myForm, residency: value })
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
                          setMyForm({ ...myForm, diploma: value })
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
                          setMyForm({ ...myForm, certification: value })
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
                            setMyForm({ ...myForm, award: value })
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
                              setMyForm({ ...myForm, extra_info: value })
                            }
                          />
                          {errors.extra_info && (
                            <p className="text-danger">{errors.extra_info}</p>
                          )}

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
                        <div className="login-result"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateConsultant
