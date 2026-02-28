import { getNews } from '@/app/lib/getNews'
import { stripHtmlTags } from '@/app/lib/stripHtml'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const newsData = await getNews()

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section
        className="page-title page-title-5 bg-overlay bg-overlay-dark bg-parallax"
        id="page-title"
      >
        <div className="bg-section">
          <Image
            src="/assets/images/departments/7.jpg"
            width={500}
            height={500}
            alt="Background"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="title">
                <div className="title-heading">
                  <h1>News</h1>
                </div>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/about-us">about us</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    news
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog blog-grid" id="blog">
        <div className="container">
          <div className="row">
            {newsData && newsData.length ? (
              newsData.map((item: any) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <div className="blog-entry" data-hover="">
                    <div className="entry-img">
                      <Link href={`/about-us/news/${item.id}`}>
                        <img
                          src={item.featured_media_src_url}
                          width={500}
                          height={500}
                          alt={item.title.rendered}
                        />
                      </Link>
                    </div>
                    <div className="entry-content">
                      <div className="entry-title">
                        <h4>
                          <Link href={`/about-us/news/${item.id}`}>
                            {item.title.rendered}
                          </Link>
                        </h4>
                      </div>
                      <div className="entry-bio">
                        <p>
                          {stripHtmlTags(
                            item.excerpt.rendered.substring(0, 200)
                          ) + '...'}
                        </p>
                      </div>
                      <div className="entry-more">
                        {' '}
                        <Link
                          className="btn btn--white btn-line btn-line-before btn-line-inversed"
                          href={`/about-us/news/${item.id}`}
                        >
                          <div className="line">
                            {' '}
                            <span> </span>
                          </div>
                          <span>read more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No News</p>
            )}
          </div>
          {/* <div className="row">
            <div className="col-12 clearfix text--center">
              <ul className="pagination">
                <li>
                  <a className="current" href="">
                    1
                  </a>
                </li>
                <li>
                  <a href="">2</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <i className="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

export default page
