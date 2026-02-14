import { getEvents } from '@/app/lib/getNews'
import { stripHtmlTags } from '@/app/lib/stripHtml'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventsPage = async () => {
  const eventsData = await getEvents()

  const getMonthsFromNum = (number: string) => {
    switch (number) {
      case '01':
        return 'January'
      case '02':
        return 'February'
      case '03':
        return 'March'
      case '04':
        return 'April'
      case '05':
        return 'May'
      case '06':
        return 'June'
      case '07':
        return 'July'
      case '08':
        return 'August'
      case '09':
        return 'September'
      case '10':
        return 'October'
      case '11':
        return 'November'
      case '12':
        return 'December'
    }
  }

  return (
    <section className="blog blog-grid blog-grid-3" id="blog-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-7 text-center">
              <h2 className="heading-title">Events</h2>
            </div>
          </div>
        </div>
        <div
          className="carousel owl-carousel carousel-dots"
          data-slide="3"
          data-slide-rs="2"
          data-autoplay="true"
          data-nav="false"
          data-dots="true"
          data-space="30"
          data-loop="false"
          data-speed="200"
        >
          {eventsData?.events?.length ? (
            eventsData.events.map((item: any) => (
              <div key={item.id}>
                <Link href={`/about-us/events/${item.id}`} passHref>
                  <div className="blog-entry" data-hover="">
                    <div className="entry-img">
                      <div className="entry-date">
                        <div className="entry-content">
                          <span className="day">
                            {item.start_date_details?.day}
                          </span>
                          <span className="month">
                            {getMonthsFromNum(item.start_date_details?.month)}
                          </span>
                          <span className="year">
                            {item.start_date_details?.year}
                          </span>
                        </div>
                      </div>
                      <img
                        src={item.image?.url}
                        width={500}
                        height={500}
                        alt={item.title || 'Event image'}
                      />
                    </div>

                    <div className="entry-content">
                      <div className="entry-title">
                        <h4>{item.title}</h4>
                      </div>
                      <div className="entry-bio">
                        <p>
                          {stripHtmlTags(item.description).substring(0, 150)}
                          ...
                        </p>
                      </div>
                      <div className="entry-more">
                        <Link
                          href={`/about-us/events/${item.id}`}
                          className="btn btn--white btn-line btn-line-before btn-line-inversed"
                        >
                          <div className="line">
                            <span></span>
                          </div>
                          <span>read more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No Events</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default EventsPage
