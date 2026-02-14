import React from "react";
import Link from "next/link";
import "../../styles/style.css"; // Custom CSS file for hover effects and animations

const Page = () => {
  const specialties = [
    "Anesthesiology", "Audiology", "Bariatric Surgery", "Cardiac Surgery",
    "Cardiology", "Clinical Hematology and Bone Marrow Transplant", "Dentistry",
    "Dermatology", "Dietetics", "Endocrinology", "E.N.T. / Head & Neck Surgery",
    "Endocrine & Breast Surgery", "Gastroenterology", "General & Laparoscopic Surgery",
    "Geriatrics / Elderly Care", "Gynae / Obstetrics", "Hepatology and Liver Transplantation",
    "Infectious Disease", "Liver Surgery", "Medicine", "Nephrology", "Neurology",
    "Neurosurgery", "Oncology", "Orthopedic Surgery", "Oral & Maxillo-facial Surgery",
    "Ophthalmology", "Paediatrics", "Pathology", "Physiotherapy",
    "Plastic / Reconstructive / Cosmetic Surgery", "Psychiatry", "Pulmonology / Critical Care",
    "Radiology", "Rheumatology", "Speech Therapy", "Urology",
    "Vascular & Endo Vascular Surgery", "Nuclear Medicine", "Paediatrics Surgery",
    "Pain Management",
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold text-primary">Explore Our Medical Specialties</h1>
      <p className="text-center text-muted mb-5">
        Choose from a wide range of specialties to find the care you need.
      </p>
      <div className="row g-4">
        {specialties.map((specialty, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <Link
              href={`/${specialty.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-decoration-none"
            >
              <div
                className="p-4 bg-gradient rounded shadow-sm d-flex flex-column align-items-center justify-content-center specialty-card"
                style={{
                  background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  color: "white",
                  textAlign: "center",
                  height: "150px",
                }}
              >
                <h6 className="fw-semibold">{specialty}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
