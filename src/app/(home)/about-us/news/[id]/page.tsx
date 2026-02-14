import { getNewsById } from '@/app/lib/getNews'
import Link from 'next/link'
import React from 'react'

const SingleNewsPage = async (props: { params: Promise<{ id: number }> }) => {
  const id = (await props.params).id

  const oneNews = await getNewsById(id)

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
                    <Link href="/about-us/news">news</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {oneNews.title.rendered}
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
                      src={oneNews.featured_media_src_url}
                      alt="entry image"
                    />
                  </a>
                </div>
                <div className="entry-content">
                  <div className="entry-title">
                    <h4>{oneNews.title.rendered}</h4>
                  </div>
                  <div className="entry-bio">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: oneNews.content.rendered,
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

export default SingleNewsPage
