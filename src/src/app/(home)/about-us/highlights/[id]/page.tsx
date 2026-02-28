import { getHighlightsById } from '@/app/lib/getHighlights'
import Link from 'next/link'
import React from 'react'

const SingleHighlightPage = async (props: {
  params: Promise<{ id: number }>
}) => {
  const id = (await props.params).id
  const oneHighlight = await getHighlightsById(id)
  return (
    <>
      <section className="page-title page-title-blank bg-white" id="page-title">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="title">
                <ol className="breadcrumb breadcrumb-long">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us/highlights">Highlights</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {oneHighlight.title.rendered}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog blog-single" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="blog-entry">
                <div className="entry-img">
                  <a href="#">
                    <img
                      src={oneHighlight.featured_media_src_url}
                      alt="entry image"
                    />
                  </a>
                </div>
                <div className="entry-content">
                  <div className="entry-title">
                    <h4>{oneHighlight.title.rendered}</h4>
                  </div>
                  <div className="entry-bio">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: oneHighlight.content.rendered,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleHighlightPage
