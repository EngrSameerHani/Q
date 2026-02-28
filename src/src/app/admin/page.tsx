import Link from 'next/link'
import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { getDepartments } from '../lib/getDepartments'
import { getConsultants } from '../lib/getConsultants'

interface Department {
  status: string
  message: string
  data: [
    {
      id: number
      name: string
      description: string
      image: string
    }
  ]
}

interface Consultant {
  status: string
  message: string
  data: [
    {
      id: number
      name: string
      department: string
      email: string
      phone: string
      image: string
    }
  ]
}

const AdminDashboard = async () => {
  const departments: Department = await getDepartments()

  const consultants: Consultant = await getConsultants()

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-item" data-hover="">
            <div className="product-img">
              <img src="/assets/images/departments/1.jpg" alt="Product" />
              <Link className="add-to-cart" href="/admin/departments">
                <FaBuilding className="me-2" />
                Departments
              </Link>
              <div className="badge"></div>
            </div>
            <div className="product-content">
              <div className="product-title">
                <a href="">Total Departments</a>
              </div>
              <div className="product-price">
                <span>{departments?.data?.length} </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="product-item" data-hover="">
            <div className="product-img">
              <img src="/assets/images/departments/2.jpg" alt="Product" />
              <Link className="add-to-cart" href="/admin/consultants">
                <FaBuilding className="me-2" />
                Consultants
              </Link>
              <div className="badge"></div>
            </div>
            <div className="product-content">
              <div className="product-title">
                <a href="">Total Consultants</a>
              </div>
              <div className="product-price">
                <span>{consultants?.data?.length} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
