'use client'
import {
  ApplyToJobAction,
  UploadPublicFileAction,
} from '@/app/_actions/_actions'
import {
  applyToJobSchema,
  ApplyToJobSchema,
} from '@/app/utils/ValidationSchema'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Loader from './Loader'

const ApplyToJob = ({ careerId }: { careerId: number }) => {
  const [loading, setLoading] = useState(false)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [myForm, setMyForm] = useState<ApplyToJobSchema>({
    name: '',
    career_id: careerId.toString(),
    email: '',
    phone: '',
    address: '',
    city: '',
    resume: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof ApplyToJobSchema]?: string
  }>({})

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const files = e.target.files
    if (!files) return
    const filePath = files[0]
    const formData = new FormData()
    formData.append('file', filePath)
    const res = await UploadPublicFileAction(formData)
    if (res.status === 'success') {
      toast.success(res.message)
      setMyForm({ ...myForm, resume: res.data.file_path })
      setLoading(false)
    } else {
      toast.error(res.message)
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof ApplyToJobSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result = applyToJobSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()

      formData.append('name', myForm.name)
      formData.append('career_id', myForm.career_id)
      formData.append('email', myForm.email)
      formData.append('phone', myForm.phone)
      formData.append('address', myForm.address)
      formData.append('city', myForm.city)
      formData.append('resume', myForm.resume)

      const res = await ApplyToJobAction(formData)
      if (res.status === 'success') {
        setLoading(false)
        toast.success(res.message)
        setMyForm({
          name: '',
          career_id: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          resume: '',
        })
      } else {
        setLoading(false)
        toast.error(res.message)
      }
    } else {
      setLoading(false)
      const fieldErrors: { [key in keyof ApplyToJobSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof ApplyToJobSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="contact-card ">
      <div className="btn btn--primary mb-2" onClick={toggleForm}>
        Apply
      </div>
      {loading && <Loader />}
      {isFormVisible && (
        <div className="contact-body border border-2 border-primary p-5 border-rounded-5">
          <h5 className="card-heading mb-5">Apply Now</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={myForm.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={myForm.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={myForm.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  value={myForm.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">City</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={myForm.city}
                  onChange={handleChange}
                  placeholder="Your City"
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>

              <div className="col-12 col-md-6">
                <label className="form-label">Upload Resume</label>
                <input
                  accept="application/pdf"
                  className="form-control"
                  type="file"
                  name="resume"
                  onChange={handleUpload}
                  placeholder="Upload Resume"
                  disabled={loading}
                />
                {errors.resume && (
                  <p className="text-danger">{errors.resume}</p>
                )}
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn--secondary">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ApplyToJob
