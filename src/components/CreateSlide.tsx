'use client'
import { SlideCreateAction, UploadFileAction } from '@/app/_actions/_actions'
import {
  AddNewSlideSchema,
  addNewSlideSchema,
} from '@/app/utils/ValidationSchema'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const CreateSlide = () => {
  const [myForm, setMyForm] = useState<AddNewSlideSchema>({
    title: '',
    description: '',
    image: '',
    slideUrl: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof AddNewSlideSchema]?: string
  }>({})

  // Handler for file upload (photo)
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const filePath = files[0]
    const formData = new FormData()
    formData.append('file', filePath)
    const res = await UploadFileAction(formData)
    if (res.status === 'success') {
      toast.success(res.message)
      setMyForm({ ...myForm, image: res.data.file_path })
    } else {
      toast.error(res.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof AddNewSlideSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('FormData:', myForm)
    const result = addNewSlideSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('title', result.data.title)
      formData.append('description', result.data.description)
      formData.append('image', result.data.image)
      formData.append('slideUrl', result.data.slideUrl)

      const res = await SlideCreateAction(formData)
      if (res.status === 'success') {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } else {
      const fieldErrors: { [key in keyof AddNewSlideSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof AddNewSlideSchema
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Create Slide</h2>
              </div>
              <div className="login-body">
                <form className="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <label>Slide Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Enter Slide title"
                        value={myForm.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
                        <p className="text-danger">{errors.title}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label>Slide Description</label>
                      <input
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder="Enter Slide description"
                        value={myForm.description}
                        onChange={handleChange}
                      />
                      {errors.description && (
                        <p className="text-danger">{errors.description}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label>Slide Url</label>
                      <input
                        className="form-control"
                        type="text"
                        name="slideUrl"
                        placeholder="Enter Slide url"
                        value={myForm.slideUrl}
                        onChange={handleChange}
                      />
                      {errors.slideUrl && (
                        <p className="text-danger">{errors.slideUrl}</p>
                      )}
                    </div>
                    <div className="col-6">
                      <label className="fw-bold text-black">Image</label>
                      <input
                        name="image"
                        type="file"
                        className="form-control text-center"
                        onChange={handleUpload}
                      />
                      {errors.image && (
                        <p className="text-danger">{errors.image}</p>
                      )}
                    </div>

                    <div className="col-12">
                      <button className="btn btn--primary" type="submit">
                        Save
                      </button>
                    </div>
                    <div className="col-12">
                      <div className="login-result"></div>
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

export default CreateSlide
