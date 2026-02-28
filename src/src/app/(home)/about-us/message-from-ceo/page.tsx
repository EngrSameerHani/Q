import { getPublicPageBySlug } from '@/app/lib/getPages'
import Image from 'next/image'

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
  const pageData: PagesData = await getPublicPageBySlug('message-from-ceo')

  return (
    <>
      <br />
      <br />
      <div className="wrapper clearfix" id="wrapperParallax">
        <section className="features-bar" id="featuresBar-1">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="team-modern team-modern-2">
                  <div className="team-member">
                    <div className="team-member-holder">
                      <div className="team-img">
                        <Image
                          src="/assets/photos/DrShb.jpeg"
                          width={500}
                          height={500}
                          objectFit="cover"
                          alt="team member"
                        />
                      </div>
                      <div className="team-content-holder">
                        <div className="team-content">
                          <div className="team-title">
                            <h4>
                              <span>Dr. Shaukat A. Bangash (M.D)</span>
                            </h4>
                          </div>
                          <div className="team-cat">
                            <h6>Chief Executive Officer</h6>
                          </div>
                          <div className="team-cat">
                            <p>
                              Diplomate, American Board of Internal Medicine
                            </p>
                          </div>
                          <div className="team-cat">
                            <p>
                              Diplomate, American Board of Infectious Diseases
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-8">
                <div className="entry-bio">
                  <h5 className="entry-heading">{pageData?.data[0]?.title}</h5>
                  <p className="entry-desc strong">
                    {pageData?.data[0]?.short_description}
                  </p>
                  <br />
                  <br />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageData?.data[0]?.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page
