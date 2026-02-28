import { getGallery } from '@/app/lib/getGallery'
import React from 'react'

const page = async (props: {
  params: Promise<{ id: number }>
  searchParams: Promise<{ title: string }>
}) => {
  const id = (await props.params).id
  const title = (await props.searchParams).title

  const galleries = await getGallery(id)

  return (
    <section className="team team-gallery">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <div className="heading heading-12 text-center">
              <h2 className="heading-title">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {galleries && galleries.length ? (
            galleries.map((item: any) => (
              <div
                className="col-12 col-md-6 col-lg-4 team-member "
                key={item.id}
              >
                <div className="team-member-holder" data-hover="">
                  <div className="team-img">
                    <img
                      src={item.url?.replace('-150x150', '-350x350')}
                      alt={item.alt}
                    />
                    <div className="team-hover">
                      <div className="team-action">
                        <div className="team-zoom">
                          <i className="far fa-eye"></i>
                          <a
                            className="img-gallery-item"
                            href={item.url?.replace('-150x150', '')}
                            title={item.alt}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No photos</p>
          )}
        </div>

        {/* <div className="row">
          <div className="col-12 text-center">
            <a className="btn btn--white" id="loadMore" href="#">
              Load More
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default page
