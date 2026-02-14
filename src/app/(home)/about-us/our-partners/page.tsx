import { getPublicPageBySlug } from '@/app/lib/getPages'
import Link from 'next/link'
import React from 'react'
import PartnersLogos from '@/components/PartnersLogos'

interface PageItem {
  id: number
  title: string
  short_description: string
  description: string
}

interface PagesData {
  status: string
  message: string
  data?: PageItem[]
}

const OurPartnersPage = async () => {
  const pageData: PagesData = await getPublicPageBySlug('our-partners')

  // Defensive check
  const page: PageItem | null =
    pageData?.data && pageData.data.length > 0 ? pageData.data[0] : null

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      {/* ===== Hero Section ===== */}
      <section className="hero hero-6 bg-overlay bg-overlay-dark">
        <div className="bg-section">
          <img src="/assets/images/sliders/13.jpg" alt="background" />
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="row">
              <div className="col-12 col-lg-5">
                <h2 className="hero-title">Our Trusted Partners</h2>
              </div>

              <div className="col-12">
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Our Partners
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Content Section ===== */}
      <section className="services" id="services-1">
        <div className="container">
          {/* CMS Content */}
          {page ? (
            <>
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h2 className="heading-title">{page.title}</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="entry-bio">
                    <h5 className="entry-heading">{page.title}</h5>
                    <p className="entry-desc strong">
                      {page.short_description}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: page.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="row">
              <div className="col-12 text-center">
                <h3>Content not available</h3>
                <p>Partners information will be updated soon.</p>
              </div>
            </div>
          )}

          {/* ===== Partners Logos (always visible) ===== */}
          <div className="row mt-5">
            <div className="col-12">
              <PartnersLogos />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurPartnersPage
