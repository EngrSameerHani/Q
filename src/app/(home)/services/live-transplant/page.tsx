import Image from 'next/image'
import React from 'react'

interface TeamMember {
  name: string
  title: string
  docImage: string
  description: string
  qualifications: string
  experience: string
  skills: string
}

// Team data as a constant array
const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Rashid Akram',
    title: 'Associate Consultant Surgery',
    docImage: '/assets/images/team/grid/1.jpg',
    description:
      'Dr. Rashid Akram is an Associate Consultant in Liver Transplantation and Hepatopancreatobiliary Surgery at Quaid e Azam International hospital Islamabad, Pakistan. He has special interest in Living Donor Liver Transplantation, Cholangiocarcinoma, Gall Bladder, bile duct and pancreatic pathologies both benign and malignant.',
    qualifications:
      'MBBS, FCPS General Surgery Fellowship in Liver Transplant and Hepatopancreatobiliary Surgery.',
    experience:
      'He worked as Senior registrar of Surgery at DHQ / Allied hospital Faisalabad. Dr. Rashid subsequently completed his fellowship in Liver Transplantation and Hepatopancreatobiliary Surgery from Shifa International Hospitals Ltd and Quaid e Azam international hospital Islamabad.',
    skills: 'Liver transplantation, Hepatopancreatobiliary surgery.',
  },
  {
    name: 'Dr. Syed Hammad Wajid',
    title: 'Asst. Consultant Hepatologist',
    docImage: '/assets/images/team/grid/1.jpg',
    description:
      'He is a young qualified Gastroenterologist, Hepatologist and Liver transplant physician. He graduated from Rawalpindi Medical College and completed his fellowship from College of Physicians and Surgeons Pakistan.',
    qualifications: 'MBBS, FCPS Gastroenterology and Hepatology.',
    experience: 'Worked as Fellow in Transplant Hepatology at QIH.',
    skills:
      'Upper and lower GI endoscopies both diagnostic and a wide range of therapeutic procedures including band ligation, clip placement, electrocauterization, foreign body removal, structure dilation and stenting, Argon plasma coagulation, Polypectomy, PEG tube placement, ERCP, Biliary stone removal, stricture dilation and stenting.',
  },
  {
    name: 'Dr. Sadaf Yousuf',
    title: 'Asst. Consultant Hepatologist',
    docImage: '/assets/images/team/grid/1.jpg',
    description:
      'She is a qualified Gastroenterologist and Hepatologist and Liver Transplant Physician. She graduated from Sindh College of Medicine ISE and completed her fellowship in Gastroenterology and Hepatology from College of Physicians and Surgeons of Pakistan.',
    qualifications: 'MBBS, FCPS Gastroenterology.',
    experience:
      'Fellowship, Transplant Hepatology, Shifa Int.Hospital. Fellowship Transplant Hepatology, Quaid e Azam Int. Hospital.',
    skills:
      'Upper and lower GI endoscopies both diagnostic and a wide range of therapeutic procedures including band ligation, clip placement, electrocauterization, foreign body removal, structure dilation and stenting, Argon plasma coagulation, Polypectomy, PEG tube placement.',
  },
  {
    name: 'Dr. Yasir Abbas',
    title: 'Asst. Consultant Hepatologist',
    docImage: '/assets/images/team/grid/1.jpg',
    description:
      'He is a qualified Gastroenterologist and Hepatologist, well-versed in management of pre-transplant and post-transplant patients and skilled in endoscopy.',
    qualifications: 'MBBS, FCPS Gastroenterology.',
    experience: 'Trained and working in liver transplant units since 2014.',
    skills:
      'Upper and lower GI endoscopies – diagnostic and therapeutic including band ligation, polypectomy, structure dilation and stenting, foreign body removal, PEG tube placement, ERCP and biliary stone retrieval, biliary structure dilation and stenting.',
  },
]

const LiverTransplantPage = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary animate-header">
          Welcome to Liver Transplant Department
        </h1>
        <p className="lead text-secondary">
          Liver transplant is a specialized life-saving health service for
          patients suffering from liver diseases. It is the only ray of hope for
          patients suffering from chronic liver disease, liver failure, and
          liver cancer. Quaid-e-Azam International Hospital has been providing
          this service since 2016 under the patronage of Dr. Shaukat Ali
          Bangash. More than 200 living donor liver transplants have been
          performed at QIH since the inception of the program with outcomes
          comparable to any international and national liver transplant program.
        </p>
      </div>

      {/* Details Section */}
      <div className="mb-5">
        <p className="text-secondary">
          Prof. Brig. Dr. Amjad Salamat is the current Director of Hepatology
          and Liver Transplant Program. He is leading the most experienced,
          dedicated, and hard-working team of surgeons and hepatologists. He is
          also credited with the inception and setting up of Liver Transplant
          program at Military Hospital Rawalpindi.
        </p>
        <p className="text-secondary">
          The Hepatology & Liver Transplantation Department at Quaid-e-Azam
          International Hospital offers pre-transplant assessment of donor and
          recipient, pre-transplant management, and optimization of potential
          recipient. The department also offers comprehensive post-transplant
          management and follow-up in OPD and IPD.
        </p>
        <p className="text-secondary">
          The Hepato-pancreatico-biliary surgery component of the department is
          performing liver tumor surgery fulfilling resection criteria,
          Gall-bladder stones/cancer surgeries, cholangiocarcinoma surgery,
          pancreatic cancer surgery, splenectomy, and portal shunt surgery. QIH
          provides excellent post-operative care with excellent results.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="services-section container py-5">
        <h2 className="text-center fw-bold text-success mb-4">Our Services</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Surgical Services */}
          <div className="col">
            <div className="card border-0 h-100 shadow-lg service-card">
              <div className="card-body p-4">
                <h5 className="card-title text-primary fw-bold">
                  Surgical Services
                </h5>
                <p className="card-text">
                  <strong>Living Donor Liver Transplant:</strong> Surgeries
                  related to benign and cancerous disease of liver, gall
                  bladder, pancreas, and extra-hepatic biliary tree.
                </p>
                <p className="card-text">
                  <strong>ERCP:</strong> Biliary and pancreatic stone retrieval,
                  benign and malignant biliary/pancreatic stricture dilatation
                  and stenting, post-transplant stricture, and leak management.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-outline-primary w-100 fw-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Endoscopic Services */}
          <div className="col">
            <div className="card border-0 h-100 shadow-lg service-card">
              <div className="card-body p-4">
                <h5 className="card-title text-primary fw-bold">
                  Endoscopic Services
                </h5>
                <p className="card-text">
                  <strong>Diagnostic:</strong> Upper GI endoscopy, Colonoscopy,
                  ERCP, EUS.
                </p>
                <p className="card-text">
                  <strong>Therapeutic:</strong> Endoscopic hemostasis, band
                  ligation, polypectomy, stricture dilation and stenting,
                  foreign body removal, PEG-tube placement.
                </p>
                <p className="card-text">
                  <strong>EUS:</strong> FNAC, FNAB, pseudo-cystogastrostomy.
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-outline-primary w-100 fw-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* Successful Transplant Section */}
        <div className="text-center bg-success text-white py-4 rounded shadow-sm mb-5">
          <h2 className="fw-bold">Successful Transplant</h2>
          <h1 className="display-3 fw-bold">236</h1>
        </div>

        {/* Our Team Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
        </div>
        <div className="row g-4">
          {/* Team Member 1 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src="/assets/images/team/grid/1.jpg"
                    width={400}
                    height={400} // Replace with actual image URL
                    alt="Dr. Amjad Salamat"
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Dr Brig Amjad Salamat (Ret)
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Head of Department
                    </p>
                    <p className="card-text text-secondary">
                      Brig Amjad Salamat (ret) is Professor of Gastroenterology
                      and Consultant Hepatologist. His basic education was from
                      Sir Syed College Rawalpindi and he did his MBBS from Army
                      Med College in 1984 at top of class as best graduate...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-6">
            <div className="card shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src="/assets/images/team/grid/1.jpg"
                    width={400}
                    height={400}
                    alt="Dr. Sikandar Afridi"
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">
                      Dr. Sikandar Aziz Afridi
                    </h5>
                    <p className="card-subtitle mb-2 text-muted">
                      Head of Liver Transplantation
                    </p>
                    <p className="card-text text-secondary">
                      Dr. Sikandar Afridi is the Consultant Surgeon/Assistant
                      Professor of liver transplantation. He has the credit of
                      performing more than 300 transplant procedures...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* this is doctor grid page */}

      <section className="team team-grid" id="teamGrid">
        <div className="container">
          <div className="row" id="team-all">
            {teamMembers.map((item, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="team-member" data-hover="">
                    <div className="team-member-holder">
                      <div className="team-img">
                        <Image
                          src={item.docImage}
                          width={500}
                          height={500}
                          alt="team member"
                        />
                        <div className="team-social">
                          {' '}
                          <a href="">
                            <i className="fab fa-facebook-f"> </i>
                          </a>
                          <a href="">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="">
                            <i className="fas fa-envelope"></i>
                          </a>
                          <a href="">
                            <i className="fas fa-phone-alt"></i>
                          </a>
                        </div>
                      </div>
                      <div className="team-content">
                        <div className="team-title">
                          <h4>
                            <a href="">{item.name}</a>
                          </h4>
                        </div>
                        <div className="team-cat">
                          <a href="">{item.title}</a>
                        </div>
                        <div className="team-desc">
                          <p>{item.description}</p>
                        </div>
                        <div className="team-cat">
                          <a href="">Qualifications</a>
                        </div>
                        <div className="team-desc">
                          <p>{item.qualifications}</p>
                        </div>
                        <div className="team-cat">
                          <a href="">Experience</a>
                        </div>
                        <div className="team-desc">
                          <p>{item.experience}</p>
                        </div>
                        <div className="team-cat">
                          <a href="">Skills:</a>
                        </div>
                        <div className="team-desc">
                          <p>{item.skills}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* this is doctor grid page */}

      <div className="container mt-5">
        {/* Visiting Consultant Section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="display-4 mb-4">Visiting Consultants</h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 mb-4 text-center">
            <Image
              src="/assets/images/departments/3.jpg"
              width={400}
              height={400}
              alt="Dr. Abdul Wahab Dogar"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
          </div>
          <div className="col-md-8">
            <h4 className="font-weight-bold">Dr. Abdul Wahab Dogar</h4>
            <p className="lead text-muted">Visiting Consultant</p>
          </div>
        </div>

        {/* Liver Transplant & HPB Coordinators Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="display-4 mb-4">
              Liver Transplant & HPB Coordinators
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4 text-center">
            <h4 className="font-weight-bold">Muhammad Khalid</h4>
            <p className="lead text-muted">
              Senior Liver Transplant Coordinator
            </p>
            <p className="text-primary">
              <a href="tel:+3449460389" className="text-decoration-none">
                0344-9460389, Ext(3369)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiverTransplantPage
