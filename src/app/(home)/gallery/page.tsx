import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getGalleries } from '@/app/lib/getGallery'

const GalleryPage = async () => {
  const galleries = await getGalleries()

  return (
    <div className="wrapper clearfix" id="wrapperParallax">
      <section className="departments" id="departments-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-3">
              <div className="heading heading-12 heading-13 text-center">
                <h2 className="heading-title">Gallery</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {galleries.map((item: any) => {
              return (
                <div key={item.id} className=" col-12 col-md-6 col-lg-4">
                  <div className="department-panel" data-hover="">
                    <Link
                      href={`/gallery/photo-gallery/${item.id}?title=${item.name}`}
                    >
                      <div className="department-panel-holder">
                        <div className="department-img">
                          <Image
                            src="/assets/images/departments/no-picture-available-placeholder-thumbnail-260nw-2179364083.jpg"
                            width={300}
                            height={300}
                            alt="background"
                          />
                        </div>
                        <div className="department-content">
                          <div className="department-title">
                            <h4>
                              <Link
                                href={`/gallery/photo-gallery/${item.id}?title=${item.name}`}
                              >
                                {item.name}
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
