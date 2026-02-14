import React from 'react'

const page = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Hospital Facilities</h1>
      <div className="row">
        {/* Hospital Support Services */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg">
            <div className="card-header bg-secondary text-white">
              <h3 className="card-title text-light mb-0">
                Hospital Support Services
              </h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  24 Hour Maintenance Department
                </li>
                <li className="list-group-item">
                  24 Hour Cafeteria & Coffee Shop
                </li>
                <li className="list-group-item">Food & Nutrition Department</li>
                <li className="list-group-item">Medical Records Department</li>
                <li className="list-group-item">
                  Material Management Department
                </li>
                <li className="list-group-item">
                  Human Resource Training and Development Department
                </li>
                <li className="list-group-item">House Keeping Department</li>
                <li className="list-group-item">IT Department</li>
                <li className="list-group-item">
                  Media & Publications Department
                </li>
                <li className="list-group-item">
                  Biomedical Engineering Department
                </li>
                <li className="list-group-item">
                  Patient Facilitation Department
                </li>
                <li className="list-group-item">
                  Admission & Billing Department
                </li>
                <li className="list-group-item">Audit & Accounts Department</li>
                <li className="list-group-item">24 Hour Laundry Department</li>
                <li className="list-group-item">Health Club</li>
                <li className="list-group-item">Ambulance Services</li>
                <li className="list-group-item">Construction Crew</li>
                <li className="list-group-item">Transport Services</li>
                <li className="list-group-item">Patient Service Department</li>
                <li className="list-group-item">Security Staff</li>
                <li className="list-group-item">Disaster Management</li>
                <li className="list-group-item">Credit & Collection (Panel)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clinical Support Services */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg">
            <div
              className="card-header  text-white"
              style={{ backgroundColor: 'var(--global--color-secondary)' }}
            >
              <h3 className="card-title text-light mb-0">
                Clinical Support Services
              </h3>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Nursing Training & Development Department
                </li>
                <li className="list-group-item">
                  Pharmacy & Medical Supplies Department
                </li>
                <li className="list-group-item">
                  Laboratory & Blood Transfusion Services
                </li>
                <li className="list-group-item">
                  Diagnostic & Interventional Radiology
                </li>
                <li className="list-group-item">Endoscopy Suites</li>
                <li className="list-group-item">Dialysis Centre</li>
                <li className="list-group-item">
                  Physiotherapy & Rehabilitation Department
                </li>
                <li className="list-group-item">
                  Central Sterilized Supplies Department
                </li>
                <li className="list-group-item">Dietary Services</li>
                <li className="list-group-item">Speech Therapists</li>
                <li className="list-group-item">Respiratory Therapy</li>
                <li className="list-group-item">Physiotherapy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
