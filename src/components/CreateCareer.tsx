'use client'
import React, { useEffect, useState } from 'react'
import {
  CreateCareerSchema,
  createCareerSchema,
} from '@/app/utils/ValidationSchema'
import { getDepartments } from '@/app/lib/getDepartments'
import { CreateCareerAction } from '@/app/_actions/_actions'
import toast from 'react-hot-toast'
import Loader from './Loader'

interface Department {
  id: number
  title: string
  description: string
}

const CreateCareer = () => {
  const [departments, setDepartments] = useState<Department[]>([])
  const [myForm, setMyForm] = useState<CreateCareerSchema>({
    position: '',
    department_id: '',
    description: '',
    open_date: '',
    close_date: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof CreateCareerSchema]?: string
  }>({})

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof CreateCareerSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const getAllDepartments = async () => {
    setLoading(true)
    const res = await getDepartments()
    setDepartments(res.data)
    setLoading(false)
  }

  useEffect(() => {
    getAllDepartments()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const result = createCareerSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('position', myForm.position)
      formData.append('department_id', myForm.department_id)
      formData.append('description', myForm.description)
      formData.append('open_date', myForm.open_date)
      formData.append('close_date', myForm.close_date)

      const res = await CreateCareerAction(formData)
      if (res.status === 'success') {
        setLoading(false)
        toast.success(res.message)
        setMyForm({
          position: '',
          department_id: '',
          description: '',
          open_date: '',
          close_date: '',
        })
      } else {
        setLoading(false)
        toast.error(res.message)
      }
    } else {
      setLoading(false)
      const fieldErrors: { [key in keyof CreateCareerSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof CreateCareerSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="contact-card">
      {loading && <Loader />}
      <div className="contact-body">
        <h5 className="card-heading mb-5">Create a Career Post</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="select-holder">
                <select
                  className="form-control"
                  name="department_id"
                  value={myForm.department_id || ''}
                  onChange={handleChange}
                >
                  <option value="">Select Department</option>
                  {departments?.length > 0 ? (
                    departments.map((department) => (
                      <option key={department.id} value={department.id}>
                        {department.title}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No departments available
                    </option>
                  )}
                </select>
                {errors.department_id && (
                  <p className="text-danger">{errors.department_id}</p>
                )}
                <div className="badge">department</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="text"
                name="position"
                value={myForm.position}
                onChange={handleChange}
                placeholder="Position"
              />
              {errors.position && (
                <p className="text-danger">{errors.position}</p>
              )}
            </div>

            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="date"
                name="open_date"
                value={myForm.open_date}
                onChange={handleChange}
                placeholder="Open Date"
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.open_date && (
                <p className="text-danger">{errors.open_date}</p>
              )}
            </div>

            <div className="col-12 col-md-6">
              <input
                className="form-control"
                type="date"
                name="close_date"
                value={myForm.close_date}
                onChange={handleChange}
                placeholder="Close Date"
                min={myForm.open_date}
              />
              {errors.close_date && (
                <p className="text-danger">{errors.close_date}</p>
              )}
            </div>

            <div className="col-12 col-md-6">
              <textarea
                className="form-control"
                name="description"
                value={myForm.description}
                onChange={handleChange}
                placeholder="Description"
              ></textarea>
              {errors.description && (
                <p className="text-danger">{errors.description}</p>
              )}
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn--secondary"
                style={{ width: '200px' }}
              >
                <span>Create</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCareer
