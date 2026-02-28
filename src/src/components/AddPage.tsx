'use client'
import { CreatePageAction } from '@/app/_actions/_actions'
import {
  addNewPageSchema,
  AddNewPageSchema,
} from '@/app/utils/ValidationSchema'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import 'react-quill-new/dist/quill.snow.css'

// Dynamically import ReactQuill (using react-quill-new)
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

const AddPage = () => {
  const [myForm, setMyForm] = useState<AddNewPageSchema>({
    title: '',
    short_description: '',
    description: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof AddNewPageSchema]?: string
  }>({})

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm({ ...myForm, [name]: value })
    if (errors[name as keyof AddNewPageSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = addNewPageSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('title', result.data.title)
      formData.append('short_description', result.data.short_description)
      formData.append('description', result.data.description)

      const res = await CreatePageAction(formData)
      if (res.status === 'success') {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } else {
      const fieldErrors: { [key in keyof AddNewPageSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof AddNewPageSchema
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
                <h2 className="heading-title">Add New page</h2>
              </div>
              <div className="login-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <label className="fw-bold text-black">Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Enter Page title"
                        value={myForm.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
                        <p className="text-danger">{errors.title}</p>
                      )}
                    </div>

                    <div className="col-6">
                      <label className="fw-bold text-black">
                        Short Description
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="short_description"
                        placeholder="Enter short description"
                        value={myForm.short_description}
                        onChange={handleChange}
                      />
                      {errors.short_description && (
                        <p className="text-danger">
                          {errors.short_description}
                        </p>
                      )}
                    </div>

                    <div className="col-12 mb-5">
                      <label className="fw-bold text-black">Description</label>
                      <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={myForm.description}
                        style={{ height: '200px' }}
                        onChange={(value) =>
                          setMyForm({ ...myForm, description: value })
                        }
                      />
                    </div>
                    {/* Submit Button */}
                    <div className="col-12">
                      <button className="btn btn--primary" type="submit">
                        Save
                      </button>
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

export default AddPage
