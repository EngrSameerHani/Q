'use client'
import { LoginAction } from '@/app/_actions/_actions'
import { LoginScehma, loginSchema } from '@/app/utils/ValidationSchema'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const LoginForm = () => {
  const router = useRouter()
  const [myForm, setMyForm] = useState<LoginScehma>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{
    [key in keyof LoginScehma]?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setMyForm({
      ...myForm,
      [name]: value,
    })
    if (errors[name as keyof LoginScehma]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = loginSchema.safeParse(myForm)
    if (result.success) {
      const formData = new FormData()
      formData.append('email', result.data.email)
      formData.append('password', result.data.password)
      const res = await LoginAction(formData)
      setLoading(true)
      if (res.message === 'Login successful') {
        toast.success(res.message)
        router.push('/')
        setLoading(false)
      } else {
        toast.error(res.message)
        setLoading(false)
      }
    } else {
      const fieldErrors: { [key in keyof LoginScehma]?: string } = {}
      result.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof LoginScehma
        fieldErrors[fieldName] = error.message
      })
      setErrors(fieldErrors)
    }
  }

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <div className="container">
        <section
          className="contact-info"
          style={{ height: '100vh', marginTop: '100px' }}
        >
          <div className="container">
            <div className="row">
              <div className="contact-panel contact-panel-4">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="contact-card">
                      <div className="contact-body">
                        <h5 className="card-heading">Welcome Back</h5>
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={myForm.email}
                                onChange={handleChange}
                              />
                              {errors.email && (
                                <p className="text-danger">{errors.email}</p>
                              )}
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                              <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={myForm.password}
                                onChange={handleChange}
                              />
                              {errors.password && (
                                <p className="text-danger">{errors.password}</p>
                              )}
                            </div>

                            <div className="col-12">
                              <button
                                disabled={loading}
                                type="submit"
                                className="btn btn--secondary btn-line btn-line-before btn--block"
                              >
                                <span>Login</span>
                              </button>
                            </div>
                            <div className="col-12">
                              <p>
                                Do not have an account?{' '}
                                <span>
                                  <Link href="/auth/register">Register</Link>
                                </span>{' '}
                              </p>
                            </div>
                            <div className="col-12">
                              <div className="contact-result"></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 offset-lg-1 img-card-holder">
                    <div className="img-card img-card-2 bg-overlay bg-overlay-theme">
                      <div className="bg-section">
                        <img src="assets/images/contact/2.jpg" alt="image" />
                      </div>
                      <div className="card-content">
                        <h3>Quaid-e-Azam International Hospital</h3>
                        <div>
                          <p>A gift to the nation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LoginForm
