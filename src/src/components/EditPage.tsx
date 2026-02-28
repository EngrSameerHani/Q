'use client'
import { EditPageAction } from '@/app/_actions/_actions'
import { getPageById } from '@/app/lib/getPages'
import {
  addNewPageSchema,
  AddNewPageSchema,
} from '@/app/utils/ValidationSchema'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import 'react-quill-new/dist/quill.snow.css'
import Loader from './Loader'

// Dynamically import ReactQuill (using react-quill-new)
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

interface PageData {
  title: string
  short_description: string
  description: string
  slug: string
}

const EditPage = ({ id }: { id: number }) => {
  const [pageId, setPageId] = useState<number>(id)
  const [pageData, setPageData] = useState<PageData>({
    title: '',
    short_description: '',
    description: '',
    slug: '',
  })
  const [loading, setLoading] = useState(false)

  const getPageData = async () => {
    setLoading(true)
    const res = await getPageById(id)
    setPageData(res.data)
    setLoading(false)
  }

  useEffect(() => {
    getPageData()
  }, [pageId])

  const [myForm, setMyForm] = useState<AddNewPageSchema>({
    title: pageData.title,
    short_description: pageData.short_description,
    description: pageData.description,
  })

  const [errors, setErrors] = useState<{
    [key in keyof AddNewPageSchema]?: string
  }>({})

  useEffect(() => {
    setMyForm({
      title: pageData.title,
      short_description: pageData.short_description,
      description: pageData.description,
    })
  }, [pageData])

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

      const res = await EditPageAction(pageId, formData)
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

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <div className="container">
      <div className="m-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <div className="heading heading-1 text--center">
                <h2 className="heading-title">Edit {pageData?.slug} Page</h2>
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

export default EditPage
