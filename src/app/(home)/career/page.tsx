import { getPublicCareers } from '@/app/lib/getCareers'
import Link from 'next/link'

interface Careers {
  status: string
  message: string
  data: [
    {
      id: number
      position: string
      description: string
      department: {
        id: number
        title: string
      }
      open_date: string
      close_date: string
      is_active: boolean
    }
  ]
}

const CareerPage = async () => {
  const careers: Careers = await getPublicCareers()

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="team-single team-single-modern">
        <div className="container">
          <h4>Jobs Opening at Quaid-e-Azam International Hospital</h4>
          <div className="entry-table">
            <table className="table table-striped">
              <tbody>
                {careers && careers?.data?.length > 0 ? (
                  careers.data
                    .filter((career) => career.is_active)
                    .map((career) => (
                      <tr key={career.id}>
                        <td>
                          <div className="content head mb-3">
                            {career.position} - job Id: {career.id}
                          </div>
                        </td>
                        <td>
                          <div className="content">
                            <div className="widget widget-services">
                              <div className="widget-content">
                                <ul className="list-unstyled">
                                  <li>
                                    <Link href={`/career/${career.id}`}>
                                      <span>
                                        {career.description.length > 100
                                          ? `${career.description.substring(
                                              0,
                                              100
                                            )}...`
                                          : career.description}
                                      </span>
                                    </Link>
                                  </li>
                                  {career.department && (
                                    <li>
                                      <Link href={`/career/${career.id}`}>
                                        <span>
                                          {career.department
                                            ? career.department.title
                                            : ''}
                                        </span>
                                      </Link>
                                    </li>
                                  )}
                                  <li>
                                    <Link href={`/career/${career.id}`}>
                                      {' '}
                                      <span className="line">
                                        {' '}
                                        <span></span>
                                      </span>
                                      <span>Apply Now</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>{' '}
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center">
                      No Careers Available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareerPage
