import Link from 'next/link'
import React from 'react'


const Doctors = [
  {
    "id": 1,
    "profession": "Anesthesiology",
    "names": [
      { "id": 1, "name": "Dr Najam-ul-Haq Sani" },
      { "id": 2, "name": "Dr. Kanwal Masood" },
      { "id": 3, "name": "DR NADIA OMER" }
    ]
  },
  {
    "id": 2,
    "profession": "Audiology",
    "names": [
      { "id": 4, "name": "DR AYESHA RIAZ" }
    ]
  },
  {
    "id": 3,
    "profession": "Bariatric Surgery",
    "names": [
      { "id": 5, "name": "Dr. Aman Ullah Khan Babar (HOD)" }
    ]
  },
  {
    "id": 4,
    "profession": "Cardiac Surgery",
    "names": [
      { "id": 6, "name": "Maj. General Asif Ali Khan" },
      { "id": 7, "name": "Brig. (R.) Prof. Dr .Ali Gohar Zamir" }
    ]
  },
  {
    "id": 5,
    "profession": "Cardiology",
    "names": [
      { "id": 8, "name": "Dr. Syed Mumtaz Ali Shah" },
      { "id": 9, "name": "Dr. Maj. General Prof. Zafar-Ul-Islam" },
      { "id": 10, "name": "Dr. Pervez Khan" },
      { "id": 11, "name": "Dr Abdul Manan Bari (Visiting Consultant)" },
      { "id": 12, "name": "Dr Maad Ullah (Paeds Visiting Consultant)" }
    ]
  },
  {
    "id": 6,
    "profession": "Clinical Hematology and Bone Marrow Transplant",
    "names": [
      { "id": 13, "name": "Dr. Maj. Gen (Retd) Parvez Ahmed" },
      { "id": 14, "name": "Dr. Shahzad Nasir" }
    ]
  },
  {
    "id": 7,
    "profession": "Dentistry",
    "names": [
      { "id": 15, "name": "Dr. Muhammad Zahid Ali" }
    ]
  },
  {
    "id": 8,
    "profession": "Dermatology",
    "names": [
      { "id": 16, "name": "Dr. Nousheen Rizwan" },
      { "id": 17, "name": "Dr. Syed Shahid Qazmi" }
    ]
  },
  {
    "id": 9,
    "profession": "Dietetics",
    "names": [
      { "id": 18, "name": "Ayeza Umar" },
      { "id": 19, "name": "Ms. Sonia Ali" }
    ]
  },
  {
    "id": 10,
    "profession": "Endocrinology",
    "names": [
      { "id": 20, "name": "Dr. Syed Zubair Hussain" },
      { "id": 21, "name": "Dr. Arshad Mahmood Mian" }
    ]
  },
  {
    "id": 11,
    "profession": "E.N.T. / Head & Neck Surgery",
    "names": [
      { "id": 22, "name": "Dr. Prof. Iftikhar Aslam" },
      { "id": 23, "name": "Mian Amer Majeed" },
      { "id": 24, "name": "Dr. Muhammad Riaz Akram" }
    ]
  },
  {
    "id": 12,
    "profession": "Endocrine & Breast Surgery",
    "names": [
      { "id": 25, "name": "Dr. Aman Ullah Khan Babar (HOD)" },
      { "id": 26, "name": "Dr.Yawar Batool Syed" }
    ]
  },
  {
    "id": 13,
    "profession": "Gastroenterology",
    "names": [
      { "id": 27, "name": "Brig. (Retd.) Dr. Muhammad Iqbal (Head of Department)" },
      { "id": 28, "name": "Dr. Muhammad Hussain" },
      { "id": 29, "name": "Dr. Falak Sher Bhatti" }
    ]
  },
  {
    "id": 14,
    "profession": "General & Laparoscopic Surgery",
    "names": [
      { "id": 30, "name": "Dr. Aman Ullah Khan Babar (HOD)" },
      { "id": 31, "name": "Dr. Syed Ali Naqi" },
      { "id": 32, "name": "Dr.Yawar Batool Syed" }
    ]
  },
  {
    "id": 15,
    "profession": "Geriatrics / Elderly Care",
    "names": [
      { "id": 33, "name": "Dr. Shafiq Alam" }
    ]
  },
  {
    "id": 16,
    "profession": "Gynae / Obstetrics",
    "names": [
      { "id": 34, "name": "Dr. Shahina Azam" },
      { "id": 35, "name": "Dr. Ghazala Sadiq" },
      { "id": 36, "name": "Dr. Shamaila Tanveer" },
      { "id": 37, "name": "Dr. Umber Jalil Bakhtiar" }
    ]
  },
  {
    "id": 17,
    "profession": "Hepatology and Liver Transplantation",
    "names": [
      { "id": 38, "name": "Dr. Amjad Salamat" },
      { "id": 39, "name": "Dr. Sikandar Aziz" },
      { "id": 40, "name": "Dr. Rashid Akram" },
      { "id": 41, "name": "Dr .Syed Hammad Wajid" }
    ]
  },
  {
    "id": 18,
    "profession": "Infectious Disease",
    "names": [
      { "id": 42, "name": "Dr. Shaukat Ali Bangash" },
      { "id": 43, "name": "Dr. Hafiz Armaghan" }
    ]
  },
  {
    "id": 19,
    "profession": "Liver Surgery",
    "names": [
      { "id": 44, "name": "Dr. Sikandar Aziz" },
      { "id": 45, "name": "Dr. Rashid Akram" }
    ]
  },
  {
    "id": 20,
    "profession": "Medicine",
    "names": [
      { "id": 46, "name": "Brig. (Retd.) Prof. Dr. S. Abdul Halim" },
      { "id": 47, "name": "Lt.Col.Dr Qasim Raza" },
      { "id": 48, "name": "Dr. Shafiq Alam" }
    ]
  },
  {
    "id": 21,
    "profession": "Nephrology",
    "names": [
      { "id": 49, "name": "Brig. (Retd.) Prof. Dr. S. Abdul Halim" }
    ]
  },
  {
    "id": 22,
    "profession": "Neurology",
    "names": [
      { "id": 50, "name": "Dr. Sarmad Ishtiaq" },
      { "id": 51, "name": "Dr. Amir Zia, MD (USA)" }
    ]
  },
  {
    "id": 23,
    "profession": "Neurosurgery",
    "names": [
      { "id": 52, "name": "Brig. (Retd.) Dr. Ishfaq Ahmed" },
      { "id": 53, "name": "DR NAWAZ AFRIDI" }
    ]
  },
  {
    "id": 24,
    "profession": "Oncology",
    "names": [
      { "id": 54, "name": "Dr. Nadeem Zia Abbasi" },
      { "id": 55, "name": "Dr. Sajida Kausar" }
    ]
  },
  {
    "id": 25,
    "profession": "Orthopedic Surgery",
    "names": [
      { "id": 56, "name": "Dr. Khalid Aslam" },
      { "id": 57, "name": "Dr. Abid Ullah Khan Niazi" },
      { "id": 58, "name": "Dr.Haroon ur Rasheed" }
    ]
  },
  {
    "id": 26,
    "profession": "Oral & Maxillo-facial Surgery",
    "names": [
      { "id": 59, "name": "not found" }
    ]
  },
  {
    "id": 27,
    "profession": "Ophthalmology",
    "names": [
      { "id": 60, "name": "Prof. Brig. (Retd.) Dr. M. Azam Khan" }
    ]
  },
  {
    "id": 28,
    "profession": "Paediatrics",
    "names": [
      { "id": 61, "name": "Col. (Retd.) Dr. Mohammad Afzal" },
      { "id": 62, "name": "Dr. Vaqas Anwar" },
      { "id": 63, "name": "Dr. Falak Niaz" },
      { "id": 64, "name": "Dr. Mushahid" },
      { "id": 65, "name": "Dr Wisal Khan" },
      { "id": 66, "name": "Dr Adnan Halim" },
      { "id": 67, "name": "Dr Maad Ullah (Paeds Visiting Consultant)" },
      { "id": 68, "name": "Dr Ambar Naseer" },
      { "id": 69, "name": "Dr Nadia Waheed" },
      { "id": 70, "name": "Dr Abdul Salam Wazir" },
      { "id": 71, "name": "Dr Muhammad Asad Farhan" }
    ]
  },
  {
    "id": 29,
    "profession": "Pathology",
    "names": [
      { "id": 72, "name": "Prof. Dr. K. A. Karamat" },
      { "id": 73, "name": "Brig (R) Azhar Mubarik" },
      { "id": 74, "name": "Prof. M. Farooq Khattak" },
      { "id": 75, "name": "Prof. Dr. Alia Naheed" }
    ]
  },
  {
    "id": 30,
    "profession": "Physiotherapy",
    "names": [
      { "id": 76, "name": "Majid Abbas" },
      { "id": 77, "name": "Ayesha Khan" },
      { "id": 78, "name": "Muhammad Usman Butt" },
      { "id": 79, "name": "Hira Maheen" }
    ]
  },
  {
    "id": 31,
    "profession": "Plastic / Reconstructive / Cosmetic Surgery",
    "names": [
      { "id": 80, "name": "Dr. Saqib Shahab" },
      { "id": 81, "name": "Dr. Zahid Ahmed Hashmi" },
      { "id": 82, "name": "Dr. Sabeen Masroor" },
      { "id": 83, "name": "Dr. Ehtisham ul Haq" }
    ]
  },
  {
    "id": 32,
    "profession": "Psychiatry",
    "names": [
      { "id": 84, "name": "Dr. Sabahat Hameed" },
      { "id": 85, "name": "Dr. Asad Hussain Head of Department, Consultant Psychiatrist and Director of Clinical Informatics" },
      { "id": 86, "name": "Samina Hussain" }
    ]
  },
  {
    "id": 33,
    "profession": "Pulmonology / Critical Care",
    "names": [
      { "id": 87, "name": "Dr. Fazal-e-Subhan" },
      { "id": 88, "name": "Dr. Arshad Mehmood" }
    ]
  },
  {
    "id": 34,
    "profession": "Radiology",
    "names": [
      { "id": 89, "name": "Dr. Imran Ahmad" }
    ]
  },
  {
    "id": 35,
    "profession": "Urology",
    "names": [
      { "id": 90, "name": "Dr. Naveed Qamar" },
      { "id": 91, "name": "Dr. Saeed Akhtar" },
      { "id": 92, "name": "Dr. Arshad Raza" }
    ]
  }
];




const ServicesPage = () => {
  return (
        <div className="container accordion w-100" id="basicAccordion">
          {/* Map through Doctors */}
          {
            Doctors.map((item) => {
              return (
                <div key={item.id} className="accordion-item">
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.profession}
                    </button>
                  </h2>
                  <div
                    id={`collapse${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#basicAccordion"
                  >
                    <div className="accordion-body d-flex flex-column align-items-start justify-content-start p-4">
                      {/* Map through names */}
                      {item.names.map((name) => (
                        <Link href="/" key={name.id} className="mb-2">
                          {name.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
  );
};

export default ServicesPage;



{/* // <div>
    //     <div className="container">
    //     <h4>
    //         Quaid-e-Azam International Hospital A project Of Global Health
    //         Services Limited
    //       </h4>
    //       <div className="entry-table">
    //         <table className="table table-striped">
    //           <tbody>
    //             <tr>
    //               <td>
    //                 <div className="content head">Our Services</div>
    //               </td>
    //               <td>
    //                 <div className="content">
    //                   <div className="widget widget-services">
    //                     <div className="widget-content">
    //                       <ul className="list-unstyled">
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Dr. Shaukat Ali Bangash </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Mr. Salman Ali Bangash </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Mr. Hyder Ali Bangash </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Mr. Abdul Rahman Memon </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Ms. Sara Rajpoot </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Ms. Mahnoor Zainab </span>
    //                           </a>
    //                         </li>
    //                         <li>
    //                           <a href="">
    //                             {' '}
    //                             <span className="line">
    //                               {' '}
    //                               <span></span>
    //                             </span>
    //                             <span> Ms. Fatima Bangash </span>
    //                           </a>
    //                         </li>
    //                       </ul>
    //                     </div>
    //                   </div>{' '}
    //                 </div>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //      </div>
    //     </div>
       
    // </div> */}