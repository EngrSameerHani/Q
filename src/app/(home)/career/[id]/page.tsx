import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getPublicSingleCareer, getSingleCareer } from '@/app/lib/getCareers'
import ApplyToJob from '@/components/ApplyToJob'

interface Career {
  status: string
  message: string
  data: {
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
}

const SingleCareerPage = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params
  const id = params.id
  const singleCareer: Career = await getPublicSingleCareer(id)

  return (
    <div>
      <section className="single-service single-department">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="entry-infos doctors-prief">
                <h5 className="entry-heading">
                  Position Title: {singleCareer?.data?.position}
                </h5>
                <p className="">
                  Position Description: {singleCareer?.data?.description}
                </p>
                <p>
                  Position Department :{' '}
                  {singleCareer?.data?.department
                    ? singleCareer?.data?.department?.title
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          <div>
            <ApplyToJob careerId={id} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleCareerPage
