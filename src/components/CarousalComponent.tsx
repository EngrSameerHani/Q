import { getAllPublicSlides } from '@/app/lib/getSlides'

interface Slide {
  status: string
  message: string
  data: [
    {
      id: number
      title: string
      description: string
      image: string
      url: string
    }
  ]
}

const CarousalComponent = async () => {
  const allSlides: Slide = await getAllPublicSlides()

  return (
    <div className="container-fluid pr-0 pl-0">
      <div
        className="slider-carousel owl-carousel carousel-navs"
        data-slide="1"
        data-slide-rs="1"
        data-autoplay="true"
        data-nav="true"
        data-dots="false"
        data-space="0"
        data-loop="true"
        data-speed="800"
        data-slider-id="#custom-carousel"
      >
        {allSlides && allSlides?.data?.length ? (
          allSlides.data.map((slide) => (
            <div className="slide" key={slide.id}>
              <div className="bg-section">
                <img
                  src={`https://qih.driveo.pk/${slide.image}`}
                  alt="Background"
                />
              </div>
              {slide?.title?.length || slide?.description?.length ? (
                <div className="container">
                  <div className="slide-content">
                    <div className="row">
                      {slide?.title?.length && (
                        <div className="col-12 col-lg-7">
                          <h1
                            className="slide-headline"
                            style={{
                              backgroundColor: 'rgba(11, 45, 41, 0.7)',
                              padding: '10px',
                              borderRadius: '10px',
                            }}
                          >
                            {slide?.title}
                          </h1>
                        </div>
                      )}
                      {slide?.description.length && (
                        <div className="col-12 col-lg-6">
                          <p
                            className="slide-desc"
                            style={{
                              backgroundColor: 'rgba(11, 45, 41, 0.7)',
                              padding: '10px',
                              borderRadius: '10px',
                            }}
                          >
                            {slide?.description}
                          </p>
                          <div className="slide-list">
                            <div className="icon">
                              <i className="flaticon-025-examination"></i>
                              <p>examination</p>
                            </div>
                            <div className="icon">
                              <i className="flaticon-019-prescription"></i>
                              <p>prescription</p>
                            </div>
                            <div className="icon">
                              <i className="flaticon-043-cardiogram"></i>
                              <p>cardiogram</p>
                            </div>
                            <div className="icon">
                              <i className="flaticon-046-blood-pressure"></i>
                              <p>blood pressure</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))
        ) : (
          <h1>No slides found</h1>
        )}
      </div>
    </div>
  )
}

export default CarousalComponent
