import Link from 'next/link'
import React from 'react'
import { FaClipboard } from 'react-icons/fa'

const ConsultantDashboardPage = () => {
  return (
    <div className="container">
      <div className="m-5">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-item" data-hover="">
            <div className="product-img">
              <img src="/assets/images/departments/1.jpg" alt="Product" />
              <Link
                className="add-to-cart"
                href="/consultant-dashboard/appointments"
              >
                <FaClipboard className="me-2" />
                Appointments
              </Link>
              <div className="badge"></div>
            </div>
            <div className="product-content">
              <div className="product-title">
                <a href="">Total Appointments</a>
              </div>
              <div className="product-price">
                <span>15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsultantDashboardPage
