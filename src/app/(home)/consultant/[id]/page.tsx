import { getPublicConsultantById } from '@/app/lib/getConsultants'
import BookAppointment from '@/components/BookAppointment'
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Link from 'next/link'

interface Consultant {
  status: string
  message: string
  data: {
    id: number
    name: string
    email: string
    work_experience: string
    residency: string
    extra_info: string
    membership: string
    certification: string
    award: string
    diploma: string
    education: [
      {
        degree: string
        institute: string
        year: string
      }
    ]
    office_extension: string
    photo: string
    departments: [
      {
        title: string
        description: string
        image: string
      }
    ]
  }
}

const SingleConsultantPage = async (props: {
  params: Promise<{ id: number }>
  searchParams: Promise<{ departmentId: number }>
}) => {
  const params = await props.params

  const departmentId = (await props.searchParams).departmentId

  const consultant: Consultant = await getPublicConsultantById(params.id)
  return (
    <div>
      <section className="hero hero-4 bg-overlay bg-overlay-theme">
        <div className="bg-section">
          <img src="/assets/images/background/dark-blue.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="team-modern team-modern-2">
                  <div className="team-member">
                    <div className="team-member-holder">
                      <div className="team-img">
                        <img
                          src={`https://qih.driveo.pk/${consultant?.data?.photo}`}
                          alt="team member"
                        />
                      </div>
                      <div className="team-content-holder">
                        <div className="team-content">
                          <div className="team-title">
                            <h4>{consultant?.data?.name}</h4>
                          </div>
                          {consultant?.data?.departments?.map(
                            (department, index) => (
                              <div className="team-cat" key={index}>
                                <p>{department.title}</p>
                              </div>
                            )
                          )}
                          <div>
                            <Link
                              href={`/book-appointment?departmentId=${departmentId}&consultantId=${params.id}`}
                              className="btn btn-primary"
                            >
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-single team-single-modern">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="sidebar sidebar-doctors">
                <div className="widget widget-reservation">
                  <img
                    src="assets/images/blog/sidebar/reservation.jpg"
                    alt="image"
                  />
                  <div className="widget-content">
                    <i className="flaticon-022-medical"></i>
                    <h5>emergency cases</h5>
                    <p>
                      Please feel welcome to contact our friendly reception
                      staff with any general or medical enquiry call us
                    </p>
                    <a href="tel:0512315159">
                      <span className="fas fa-phone-alt"></span>(051) 2315159
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
                {/* <div className="widget widget-opening-hours">
                  <div className="widget-content">
                    <BookAppointment
                      consultantId={params.id}
                      departmentId={departmentId}
                    />
                  </div>
                </div> */}
                <div className="widget widget-download">
                  <div className="widget-content">
                    <ul className="list-unstyled">
                      <li>
                        <a href="">
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
                        </a>
                      </li>
                      <li className="inversed">
                        <a href="">
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
                                    d="M2.12 2L2.93 1L14.93 1L15.87 2L2.12 2ZM9 14.5L3.5 9L7 9L7 7L11 7L11 9L14.5 9L9 14.5ZM17.54 2.23L16.15 0.55C15.88 0.21 15.47 0 15 0L3 0C2.53 0 2.12 0.21 1.84 0.55L0.46 2.23C0.17 2.57 0 3.02 0 3.5L0 16C0 17.1 0.9 18 2 18L16 18C17.1 18 18 17.1 18 16L18 3.5C18 3.02 17.83 2.57 17.54 2.23Z"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </svg>
                          <span>2020 patient reports</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              {consultant.data?.education?.length > 0 && (
                <>
                  <h5 className="entry-heading">Education</h5>
                  <div className="entry-table">
                    <table className="table table-striped">
                      <tbody>
                        {consultant.data?.education?.map((edu, index) => (
                          <tr key={index}>
                            <td>
                              <div className="content head">{edu.degree}</div>
                            </td>
                            <td>
                              <div className="content">{edu.institute}</div>
                            </td>
                            <td>
                              <div className="content">{edu.year}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {consultant?.data?.membership ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Membership</h5>

                  <div className="education-panels">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: consultant?.data?.membership,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                ''
              )}

              {consultant?.data?.work_experience ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Work experience</h5>

                  <div className="education-panels">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: consultant?.data?.work_experience,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                ''
              )}

              {consultant?.data?.residency ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Residency</h5>
                  <div className="education-panels">
                    <ul>
                      {consultant?.data?.residency
                        .replace(/<\/?ul>/g, '') // Remove <ul> tags
                        .split('</li><li>') // Split on list items
                        .map((item, index) => (
                          <li key={index}>
                            <GoDotFill
                              size={10}
                              style={{ marginRight: '5px' }}
                            />
                            {item.replace(/<\/?li>/g, '')}
                          </li> // Remove <li> tags
                        ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {consultant?.data?.extra_info ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Extra Information</h5>

                  <div className="education-panels">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: consultant?.data?.extra_info,
                      }}
                    ></div>
                  </div>
                </div>
              ) : (
                ''
              )}

              {consultant?.data?.diploma ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Diploma</h5>
                  <div className="education-panels">
                    <ul>
                      {consultant?.data?.diploma
                        .replace(/<\/?ul>/g, '') // Remove <ul> tags
                        .split('</li><li>') // Split on list items
                        .map((item, index) => (
                          <li key={index}>
                            <GoDotFill
                              size={10}
                              style={{ marginRight: '5px' }}
                            />
                            {item.replace(/<\/?li>/g, '')}
                          </li> // Remove <li> tags
                        ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {consultant?.data?.certification ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Certification</h5>
                  <div className="education-panels">
                    <ul>
                      {consultant?.data?.certification
                        .replace(/<\/?ul>/g, '') // Remove <ul> tags
                        .split('</li><li>') // Split on list items
                        .map((item, index) => (
                          <li key={index}>
                            <GoDotFill
                              size={10}
                              style={{ marginRight: '5px' }}
                            />
                            {item.replace(/<\/?li>/g, '')}
                          </li> // Remove <li> tags
                        ))}
                    </ul>
                  </div>
                </div>
              ) : null}

              {consultant?.data?.award ? (
                <div className="entry-bio entry-education">
                  <h5 className="entry-heading">Awards</h5>
                  <div className="education-panels">
                    <ul>
                      {consultant?.data?.award
                        .replace(/<\/?ul>/g, '') // Remove <ul> tags
                        .split('</li><li>') // Split on list items
                        .map((item, index) => (
                          <li key={index}>
                            <GoDotFill
                              size={10}
                              style={{ marginRight: '5px' }}
                            />
                            {item.replace(/<\/?li>/g, '')}
                          </li> // Remove <li> tags
                        ))}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleConsultantPage
