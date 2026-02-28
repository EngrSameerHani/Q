import { getPublicDepartmentById } from '@/app/lib/getDepartments'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async (props: { params: Promise<{ depart: number }> }) => {
  const params = await props.params

  const department = await getPublicDepartmentById(params.depart)

  return (
    <div>
      <section
        className="page-title page-title-4 bg-overlay bg-overlay-dark bg-parallax"
        id="page-title"
      >
        <div className="bg-section">
          <Image
            src="/assets/images/departments/3.jpg"
            width={500}
            height={500}
            alt="Background"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
              <div className="title">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="">services</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {department?.data?.title}
                  </li>
                </ol>
                <div className="title-card">
                  <div className="card-icon">
                    {' '}
                    <i className="flaticon-029-cardiogram-1"></i>
                  </div>
                  <div className="card-content">
                    <div className="title-heading">
                      <h1>{department?.data?.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-service single-department">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="entry-infos doctors-prief mb-4">
                <div
                  dangerouslySetInnerHTML={{
                    __html: department?.data?.description,
                  }}
                ></div>
              </div>
              <div className="entry-infos doctors-prief">
                <h5 className="entry-heading">Meet Our Doctors</h5>
                <p className="entry-desc">
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquiries. Doctors will be available from 8 am : 12 am ,
                  kindly call to confirm your Appointment.
                </p>
                <div className="row team-grid team-grid-4" id="team-all">
                  {department ? (
                    department?.data?.consultants.map(
                      (consultant: any, index: number) => {
                        return (
                          <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="team-member" data-hover="">
                              <Link
                                href={`/consultant/${consultant.id}?departmentId=${department.data.id}`}
                              >
                                <div className="team-member-holder">
                                  <div className="team-img">
                                    <Image
                                      src={`https://qih.driveo.pk/${consultant.photo}`}
                                      width={500}
                                      height={500}
                                      alt="team member"
                                    />
                                  </div>
                                  <div className="team-content">
                                    <div className="team-title">
                                      <h4>
                                        <Link
                                          href={`/consultant/${consultant.id}`}
                                        >
                                          {consultant.name}
                                        </Link>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        )
                      }
                    )
                  ) : (
                    <p>no consultant founds</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="sidebar sidebar-service sidebar-department">
                {/* <div className="widget widget-services">
                  <div className="widget-title">
                    <h5>medical services</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>{department.data.title}</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>cardiology clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>pathology clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>labotatory analysis</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>pediatric clinic</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          {' '}
                          <span className="line">
                            {' '}
                            <span></span>
                          </span>
                          <span>cardiac clinic</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="widget widget-reservation">
                  <Image
                    src="/assets/images/blog/sidebar/reservation.jpg"
                    width={500}
                    height={500}
                    alt="image"
                  />
                  <div className="widget-content">
                    <i className="flaticon-022-medical"></i>
                    <h5>emergency cases</h5>
                    <p>
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry call us
                    </p>
                    <a href="tel:+920518449100">
                      <span className="fas fa-phone-alt"></span>
                      (051) 8449100
                    </a>
                  </div>
                </div>

                <div className="widget widget-opening-hours">
                  <div className="widget-content">
                    <i className="flaticon-014-uniform"></i>
                    <h5>opening hours </h5>
                    <ul className="list-unstyled">
                      <li>
                        {' '}
                        <span>monday-friday</span>
                        <span>8:00 - 7:00 pm</span>
                      </li>
                      <li>
                        {' '}
                        <span>saturday</span>
                        <span>9:00 - 8:00 pm</span>
                      </li>
                      <li>
                        {' '}
                        <span>sunday</span>
                        <span>10:00 - 9:00 pm</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget widget-download">
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <Link href="/services/patient-charges">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width="18"
                            height="18"
                          >
                            <g>
                              <g>
                                <g>
                                  <path
                                    className="shp0"
                                    d="M10 10L8 10L8 4L10 4L10 10ZM9 14.3C8.28 14.3 7.7 13.72 7.7 13C7.7 12.28 8.28 11.7 9 11.7C9.72 11.7 10.3 12.28 10.3 13C10.3 13.72 9.72 14.3 9 14.3ZM12.73 0L5.27 0L0 5.27L0 12.73L5.27 18L12.73 18L18 12.73L18 5.27L12.73 0Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span>covid-19 latest update</span>
                        </Link>
                      </li>
                      <li className="inversed">
                        <a href="https://portal.qih.com.pk" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width="18"
                            height="18"
                          >
                            <g>
                              <g>
                                <g>
                                  <path
                                    className="shp0"
                                    id="Archive Icon"
                                    d="M2.12 2L2.93 1L14.93 1L15.87 2L2.12 2ZM9 14.5L3.5 9L7 9L7 7L11 7L11 9L14.5 9L9 14.5ZM17.54 2.23L16.15 0.55C15.88 0.21 15.47 0 15 0L3 0C2.53 0 2.12 0.21 1.84 0.55L0.46 2.23C0.17 2.57 0 3.02 0 3.5L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 3.5C18 3.02 17.83 2.57 17.54 2.23Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span>patient reports</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
