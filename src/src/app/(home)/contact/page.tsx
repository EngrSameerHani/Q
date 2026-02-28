import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="wrapper clearfix" id="wrapperParallax">
        <div className="module-content module-fullscreen module-search-box">
          <div className="pos-vertical-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                  <form className="form-search">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="type words then enter"
                    />
                    <button></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <a className="module-cancel" href="#">
            <i className="fas fa-times"></i>
          </a>
        </div>
        <section className="map map-2">
          <iframe
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Quaid-e-Azam%20International%20Hospital&t=&z=11&ie=UTF8&iwloc=B&output=embed"
            width="600"
            height="450"
          ></iframe>
        </section>
        <section className="contact-info">
          <div className="container">
            <div className="row">
              <div className="contact-panel contact-panel-4">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="contact-card">
                      <div className="contact-body">
                        <h5 className="card-heading">How can we help?</h5>
                        <p className="card-desc">
                          Please feel welcome to contact our friendly reception
                          staff with any general or medical enquiry. Our doctors
                          will receive or return calls.
                        </p>
                        <form
                          className="contactForm"
                          method="post"
                          action="assets/php/contact.php"
                        >
                          <div className="row">
                            <div className="col-12 col-md-12 col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                name="contact-name"
                                placeholder="Name"
                                required
                              />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                name="contact-email"
                                placeholder="Email"
                                required
                              />
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="select-holder">
                                <select className="form-control">
                                  <option value="default">subject</option>
                                  <option value="AL">
                                    how to eat healthy ?
                                  </option>
                                  <option value="AK">
                                    wearing a mask importance{" "}
                                  </option>
                                </select>
                                <div className="badge">subject</div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                              <input
                                className="form-control"
                                type="text"
                                name="contact-phone"
                                placeholder="Phone"
                                required
                              />
                            </div>
                            <div className="col-12">
                              <textarea
                                className="form-control"
                                name="contact-message"
                                cols={30}
                                rows={2}
                                placeholder="message"
                                required
                              ></textarea>
                            </div>
                            <div className="col-12">
                              <button className="btn btn--secondary btn-line btn-line-before btn--block">
                                <span className="line">
                                  {" "}
                                  <span> </span>
                                </span>
                                <span>submit request</span>
                              </button>
                            </div>
                            <div className="col-12">
                              <div className="contact-result"></div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-5 offset-lg-1 img-card-holder">
                    <div className="img-card img-card-2 bg-overlay bg-overlay-theme">
                      <div className="bg-section">
                        <Image 
                        src="/assets/images/contact/2.jpg" 
                        width={500}
                       height={500}
                        alt="image" />
                      </div>
                      <div className="card-content">
                        <h3>delivering the best care for family</h3>
                        <div>
                          <p>
                            With modern, busy lifestyles, it’s easy to neglect
                            your health as you put everyone needs first. So,
                            we’re here for your family.
                          </p>
                          <a
                            className="btn btn--white btn-line btn-line-after"
                            href="#"
                          >
                            <span>find a doctor</span>
                            <span className="line">
                              <span></span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donations" id="donations-1">
          <div className="container">
            <div className="heading heading-4">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <h2 className="heading-title">
                    Helping Patients From Around the Globe!!
                  </h2>
                  <div className="img-hotspot">
                    <div className="img-hotspot-wrap">
                      <div className="img-hotspot-bg">
                        {" "}
                        <Image
                          src="/assets/images/background/world-map.png"
                          width={700}
                       height={400}
                          alt="image"
                        />
                      </div>
                      <div className="img-hotspot-pointers">
                        <div
                          className="img-hotspot-pointer"
                          data-spot-x="15%"
                          data-spot-y="29%"
                        >
                          <Image
                            src="/assets/images/background/map-pointer.png"
                            width={30}
                       height={30}
                            alt="pointer"
                          />
                          <div
                            className="info right"
                            data-info-x="18px"
                            data-info-y="-97px"
                          >
                            <span>
                              2307 Beverley Rd Brooklyn, New York 11226 U.S.
                            </span>
                          </div>
                        </div>
                        <div
                          className="img-hotspot-pointer"
                          data-spot-x="48%"
                          data-spot-y="48%"
                        >
                          <Image
                            src="/assets/images/background/map-pointer.png"
                            width={30}
                       height={30}
                            alt="pointer"
                          />
                          <div
                            className="info left"
                            data-info-x="-160px"
                            data-info-y="-97px"
                          >
                            <span>
                              2307 Beverley Rd Brooklyn, New York 11226 U.S.
                            </span>
                          </div>
                        </div>
                        <div
                          className="img-hotspot-pointer"
                          data-spot-x="68%"
                          data-spot-y="23%"
                        >
                          <Image
                            src="/assets/images/background/map-pointer.png"
                            width={30}
                       height={30}
                            alt="pointer"
                          />
                          <div
                            className="info left"
                            data-info-x="-160px"
                            data-info-y="-97px"
                          >
                            <span>
                              2307 Beverley Rd Brooklyn, New York 11226 U.S.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6 offset-lg-1">
                  <p className="paragraph">
                    Our staff strives to make each interaction with patients
                    clear, concise, and <br /> inviting. Support the important
                    work of Medicsh Hospital by making a <br /> much-needed
                    donation today.
                  </p>
                  <p className="heading-desc">
                    We will work with you to develop individualised care plans,
                    including management of chronic diseases. If we cannot
                    assist, we can provide referrals or advice about the type of
                    practitioner you require. We treat all enquiries sensitively
                    and in the strictest confidence.
                  </p>
                  <div className="accordion" id="accordion03">
                    <div className="card">
                      <div className="card-heading">
                        <a
                          className="card-link collapsed"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapse01-1"
                          href="#collapse01-1"
                        >
                          Quaid-e-Azam International Hospital,
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapse01-1"
                        data-bs-parent="#accordion03"
                      >
                        <div className="card-body">
                        Near Golra Morr, Peshawar Road, Islamabad, Pakistan
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a
                          className="card-link collapsed"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapse01-2"
                          href="#collapse01-2"
                        >
                          Our Phones Numbers
                        </a>
                      </div>
                      <div
                        className="collapse"
                        id="collapse01-2"
                        data-bs-parent="#accordion03"
                      >
                        <div className="card-body">
                        +92 (051) 8449100,
                        <br />
                        92 (051) 2315249,
                        <br />
                        +92 (051) 2315184,
                        <br />
                        +92 (051) 2315262
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <a
                          className="card-link"
                          data-bs-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapse01-3"
                          href="#collapse01-3"
                        >
                          Our Email Address
                        </a>
                      </div>
                      <div
                        className="collapse show"
                        id="collapse01-3"
                        data-bs-parent="#accordion03"
                      >
                        <div className="card-body">
                        info@qih.com.pk
                        </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
