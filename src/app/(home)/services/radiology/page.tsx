import { getPublicPageBySlug } from '@/app/lib/getPages'
import React from 'react'

interface PagesData {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      short_description: string
      description: string
    }
  ]
}

const page = async () => {
  const pageData: PagesData = await getPublicPageBySlug('radiology')

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="features-bar" id="featuresBar-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="entry-bio">
                <h5 className="entry-heading">{pageData?.data[0]?.title}</h5>
                <p className="entry-desc strong">
                  {pageData?.data[0]?.short_description}
                </p>
                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: pageData?.data[0]?.description
                      ? pageData?.data[0]?.description
                      : '',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
