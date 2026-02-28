'use client'
import { TickersCreationAction } from '@/app/_actions/_actions'
import {
  MakeTickersSchema,
  makeTickersSechema,
} from '@/app/utils/ValidationSchema'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
  const [myForm, setMyForm] = useState({
    title: '',
    url: '',
  })

  const [errors, setErrors] = useState<{
    [key in keyof MakeTickersSchema]?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof MakeTickersSchema]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = makeTickersSechema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('title', result.data.title)
      formData.append('url', result.data.url)
      const res = await TickersCreationAction(formData)
      if (res.status === 'success') {
        toast.success(res.message)
      } else {
        toast.error(res.message)
      }
    } else {
      const fieldErrors: { [key in keyof MakeTickersSchema]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof MakeTickersSchema
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
                <h2 className="heading-title">Create Tickers</h2>
              </div>
              <div className="login-body">
                <form className="" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <label>Ticker Title</label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Enter Tickers title"
                        value={myForm.title}
                        onChange={handleChange}
                      />
                      {errors.title && (
                        <p className="text-danger">{errors.title}</p>
                      )}
                    </div>
                    <div className="col-12">
                      <label>Tickers url</label>
                      <input
                        className="form-control"
                        type="text"
                        name="url"
                        placeholder="Enter Tickers url"
                        value={myForm.url}
                        onChange={handleChange}
                      />
                      {errors.url && (
                        <p className="text-danger">{errors.url}</p>
                      )}
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn--secondary btn-line btn-line-before btn--block"
                        style={{ width: '200px' }}
                        type="submit"
                      >
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

export default page
