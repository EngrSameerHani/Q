import { getPublicApplications } from '@/app/lib/getApplications'
import DeleteJobApplication from '@/components/DeleteJobApplication'
import JobApplicationFilter from '@/components/JobApplicationFilter'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'

interface Application {
  status: string
  message: string
  data: [
    {
      id: number
      name: string
      career_id: number
      email: string
      phone: string
      address: string
      city: string
      resume: string
      career: {
        id: number
        position: string
        description: string
        department_id: number
        open_date: string
        close_date: string
      }
    }
  ]
}

const JobApplicationsPage = async (props: {
  searchParams: Promise<{ careerId: string }>
}) => {
  const { careerId } = await props.searchParams
  const careerIdNumber = careerId ? parseInt(careerId, 10) : 0
  const applications: Application = await getPublicApplications(careerIdNumber)

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Job Applications</h4>
          </div>
        </div>
        <div>
          <JobApplicationFilter />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Job Id</th>
              <th scope="col">Job Opening</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col text-center">Download Resume</th>
              <th scope="col text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications && applications?.data?.length
              ? applications?.data?.map((app, index) => (
                  <tr key={app.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{app?.career?.id}</td>
                    <td>{app?.career?.position}</td>
                    <td>{app?.name}</td>
                    <td>{app?.email}</td>
                    <td>{app?.phone}</td>
                    <td>{app?.city}</td>

                    <td className="text-center">
                      {app?.resume ? (
                        <a
                          href={`https://qih.driveo.pk/${app.resume}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          style={{ cursor: 'pointer' }}
                        >
                          <FaDownload />
                        </a>
                      ) : (
                        'No resume uploaded'
                      )}
                    </td>
                    <td>
                      <DeleteJobApplication id={app.id} />
                    </td>
                  </tr>
                ))
              : 'No applications found'}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default JobApplicationsPage
