import React from 'react'

const Page = () => {
  return (
    <div className="container">
      <h3 className="text-center">QIH Teleconsultation Services</h3>

      <section className="cta cta-3" id="cta-3">
        <div className="container">
          <div className="heading heading-6">
            <div className="row">
              <div className="col-12 col-lg-5">
                <p className="heading-subtitle">
                  Consult a Doctor by Staying at Home
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-5">
                <p>
                  A state-of-the-art hospital, well planned, well equipped, and
                  providing quality healthcare facilities in all disciplines of
                  medicine and surgery by well-trained, experienced teams of
                  experts at an affordable price with compassion and competence.
                  Quaid-e-Azam International Hospital (QIH) Consultants are now
                  available to provide Teleconsultation services to our valued
                  patients. You can also avail general advice on all ailments &
                  coronavirus through an online video link.
                </p>
              </div>

              <div className="col-12 col-lg-6 offset-lg-1">
                <div className="brief-set">
                  <h3 className="heading-subtitle">
                    How to use QIH Teleconsultation Service:
                  </h3>
                  <ul className="list-unstyled advantages-list">
                    <li>
                      <i className="fas fa-check"></i> ☛ Please call at
                      <strong> 051 844 9100 </strong> for a Teleconsultation
                      appointment (Mon to Sun: 8 am to 10 pm).
                    </li>
                    <li>
                      <i className="fas fa-check"></i> ☛ Get Teleconsultation
                      from our Consultant or General Physician.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> ☛ Our Call Center
                      representative will schedule the appointment as per the
                      doctor's availability and your needs.
                    </li>
                    <li>
                      <i className="fas fa-check"></i> ☛ Our Call Center
                      representative will guide you on available payment options
                      for the Teleconsultation fee. Choose the preferred mode of
                      payment and follow the process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="widget widget-reservation">
          <img
            src="assets/images/blog/sidebar/reservation.jpg"
            alt="Reservation"
          />
          <div className="widget-content">
            <i className="flaticon-022-medical"></i>
            <h5>Appointment & Information</h5>
            <p>
              Please feel welcome to contact our friendly reception staff with
              any general or medical enquiry.
            </p>
            <a href="tel:0518449100">
              <span className="fas fa-phone-alt"></span> 051 844 9100
            </a>
            <h5>Easy Payment Options</h5>
            <p>
              <strong>Online Fund Transfer:</strong> Bank Al-Habib Limited
            </p>
            <p>
              <strong>Account Name:</strong> GLOBAL HEALTH SERVICES LIMITED
              <br />
              <strong>Account #:</strong> 0098-0081001580-01-6
            </p>
            <h5>Payment Confirmation</h5>
            <p>
              Kindly send the screenshot of the online transfer receipt/scanned
              copy of the payment slip with your name and Medical Record number
              to{' '}
              <a href="mailto:registration@qih.com.pk">
                registration@qih.com.pk
              </a>
            </p>

            <div className="widget widget-opening-hours">
              <div className="widget-content">
                <i className="flaticon-014-uniform"></i>
                <ul className="list-unstyled">
                  <li>
                    Once your payment is received and verified, your appointment
                    with a QIH Consultant will be confirmed.
                  </li>
                  <li>
                    Our representative will call you and provide the video link
                    via SMS, Email, or WhatsApp. You can simply click the link
                    to access the Teleconsultation portal.
                  </li>
                  <li>
                    A copy of the Prescription will be shared with you via SMS,
                    Email, or WhatsApp.
                  </li>
                </ul>
              </div>
            </div>

            <p>
              <strong>Convenience & Trust whenever you Need it!</strong>
            </p>
          </div>
        </div>
        <div className="module-contact">
          <a className="btn btn--secondary" href="">
            Why' Waiting
          </a>
          <a className="btn btn--primary btn-line btn-line-after" href="">
            {' '}
            <span>Book Online Toaday</span>
            <span className="line">
              {' '}
              <span></span>
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Page
