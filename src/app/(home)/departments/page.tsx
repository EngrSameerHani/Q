import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getDepartments } from '@/app/lib/getDepartments'
import { getDepartmentImage } from '@/app/lib/departmentImageMap'

interface Department {
  status: string
  message: string
  data: {
    id: number
    title: string
    description: string
    image: string
    is_active: number
  }[]
}

const DepartmentsPage = async () => {
  const departments: Department = await getDepartments()

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      {/* HERO SECTION */}
      <section className="hero hero-9 bg-overlay bg-overlay-dark">
        <div className="bg-section">
          <Image
            src="/assets/images/departments/3.jpg"
            width={1920}
            height={800}
            alt="Departments Banner"
          />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="hero-title">
                  wide range of medical services for your family
                </h2>
                <p className="hero-desc">
                  The health and well-being of our patients and their health care
                  team will always be our priority.
                </p>
              </div>

              <div className="col-12">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Departments
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS LIST */}
      <section className="departments" id="departments-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="heading text-center">
                <p className="heading-subtitle">
                  the best medical and general practice care!
                </p>
                <h2 className="heading-title">
                  providing medical care for our community.
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            {departments?.data?.map((dept) => (
              <div key={dept.id} className="col-12 col-md-6 col-lg-4">
                <div className="department-panel">
                  <Link href={`/departments/${dept.id}`}>
                    <div className="department-panel-holder">
                      <div className="department-img">
                        <Image
                          src={
                            dept.image
                              ? `https://qih.driveo.pk/${dept.image}`
                              : getDepartmentImage(dept.title)
                          }
                          width={500}
                          height={500}
                          alt={dept.title}
                        />
                      </div>

                      <div className="department-content">
                        <div className="department-title">
                          <h4>{dept.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DepartmentsPage
