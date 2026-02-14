import { getCareers } from '@/app/lib/getCareers'
import DeleteCareer from '@/components/DeleteCareer'
import Link from 'next/link'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

interface Careers {
  status: string
  message: string
  data: [
    {
      id: number
      position: string
      deparment_id: number
      description: string
      open_date: string
      close_date: string
      is_active: boolean
      department: {
        id: number
        title: string
      }
    }
  ]
}

const CareersAdminPage = async () => {
  const allCareers: Careers = await getCareers()

  return (
    <div className="container">
      <div className="m-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Careers</h4>
          </div>
          <div>
            <Link
              href="/admin/careers/create"
              type="button"
              className="btn btn--secondary btn-line btn-line-before btn--block"
              style={{ width: '200px' }}
            >
              Add Career
            </Link>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Position</th>
              <th scope="col">Open Date</th>
              <th scope="col">Close Date</th>
              <th scope="col">Description</th>
              <th scope="col">Department</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allCareers && allCareers?.data?.length
              ? allCareers?.data?.map((career, index) => (
                  <tr key={career.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{career?.position}</td>
                    <td>
                      {career?.open_date
                        ? new Date(career?.open_date).toLocaleDateString(
                            'en-GB'
                          )
                        : 'N/A'}
                    </td>
                    <td>
                      {career?.close_date
                        ? new Date(career?.close_date).toLocaleDateString(
                            'en-GB'
                          )
                        : 'N/A'}
                    </td>
                    <td>{career?.description}</td>
                    <td>{career?.department?.title}</td>
                    <td>{career?.is_active === true ? 'Yes' : 'No'}</td>
                    <td>
                      <Link
                        href={`/admin/careers/edit/${career.id}`}
                        className="text-primary mx-2"
                      >
                        <FaEdit />
                      </Link>
                      <DeleteCareer id={career.id} />
                    </td>
                  </tr>
                ))
              : 'No careers found'}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CareersAdminPage
