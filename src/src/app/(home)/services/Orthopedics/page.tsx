'use client'
import React, { useState } from 'react'

export default function Orthopedics() {
  const [active, setActive] = useState<string>('trauma')

  const categories = [
    { id: 'trauma', label: 'Trauma & Fracture Surgery' },
    { id: 'upper-limb', label: 'Upper Limb Procedures' },
    { id: 'lower-limb', label: 'Lower Limb Procedures' },
    { id: 'pediatric', label: 'Pediatric Orthopedic Procedures' },
    { id: 'infection', label: 'Infection & Emergency Procedures' },
    { id: 'arthroplasty', label: 'Arthroplasty (Joint Replacement)' },
    { id: 'misc', label: 'Miscellaneous Orthopedic Procedures' },
  ]

  const procedures: Record<string, string[]> = {
    trauma: [
      'Closed reduction of fractures',
      'Closed reduction with POP cast',
      'Closed reduction with traction',
      'Closed reduction with K-wire fixation',
      'Manipulation under anesthesia (MUA)',
      'ORIF with plates and screws',
      'ORIF with intramedullary nail (IM nail)',
      'ORIF with K-wires',
      'External fixator application',
      'Ilizarov fixator application',
      'Removal of external fixator',
      'Removal of implants (joint implants, plates, nails, screws, wires)',
    ],
    'upper-limb': [
      'Shoulder dislocation reduction',
      'Rotator cuff repair',
      'Shoulder arthroscopy',
      'Latarjet procedure (Modified bristow)',
      'Shoulder hemiarthroplasty',
      'Total shoulder replacement',
      'ORIF humerus fracture',
      'Elbow dislocation reduction',
      'Tennis elbow release',
      'Cubital tunnel release',
      'ORIF radius fracture',
      'ORIF ulna fracture',
      'ORIF both bone forearm',
      'Carpal tunnel release',
      'Trigger finger release',
      'De Quervain’s release',
      'Tendon repair (flexor/extensor)',
      'K-wire fixation of hand fractures',
      'Scaphoid fixation',
      'Wrist arthrodesis',
    ],
    'lower-limb': [
      'Hip dislocation reduction (Open/Closed)',
      'DHS (Dynamic Hip Screw)',
      'PFN (Proximal Femoral Nail)',
      'Hemiarthroplasty (Austin Moore / Bipolar)',
      'Total Hip Replacement (THR)',
      'IM nailing of femur',
      'ORIF distal femur',
      'Supracondylar femur fixation',
      'Plate fixation',
      'Arthroscopic meniscectomy',
      'ACL reconstruction',
      'PCL reconstruction',
      'Knee arthroscopy',
      'Total Knee Replacement (TKR)',
      'Patella fracture fixation',
      'IM nailing tibia',
      'ORIF tibia fracture',
      'External fixator tibia',
      'Ankle fracture ORIF',
      'Achilles tendon repair and lengthening',
      'Clubfoot (CTEV) correction',
      'Hallux valgus correction',
      'Plantar fascia release',
      'Partial capitectomy 1st metatarsal bone',
    ],
    pediatric: [
      'Clubfoot casting and surgery',
      'Developmental dysplasia of hip (DDH) surgery',
      'Pelvic osteotomy',
      'Congenital limb deformity correction',
    ],
    infection: [
      'Incision and drainage (I&D)',
      'Debridement of infected wounds',
      'Septic arthritis washout',
      'Amputation (toe, foot, below knee, above knee)',
      'Vacu-suction',
    ],
    arthroplasty: [
      'Total hip replacement',
      'Total knee replacement',
      'Revision arthroplasty (knee and hip)',
      'Shoulder replacement',
    ],
    misc: [
      'Bone biopsy',
      'Bone grafting',
      'Tendon transfer',
      'Soft tissue tumor excision',
      'Synovectomy',
      'Contracture release',
    ],
  }

  const green = '#198916'

  return (
    <div style={{ padding: '60px 20px', background: '#f5f7fa', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '40px',
        }}
        className="responsive-grid"
      >
        {/* SIDEBAR */}
        <div
          style={{
            background: '#d9e4ec',
            padding: '25px',
            borderRadius: '12px',
            height: 'fit-content',
            boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
          }}
        >
          <h3 style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 600 }}>Orthopedics</h3>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                width: '100%',
                padding: '14px',
                marginBottom: '12px',
                border: 'none',
                borderRadius: '8px',
                textAlign: 'left',
                cursor: 'pointer',
                fontWeight: 500,
                transition: '0.25s',
                background: active === cat.id ? green : '#fff',
                color: active === cat.id ? '#fff' : '#000',
                boxShadow:
                  active === cat.id
                    ? '0 3px 10px rgba(0,0,0,0.15)'
                    : '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div
          style={{
            background: '#fff',
            padding: '35px',
            borderRadius: '14px',
            boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
          }}
        >
          <h2 style={{ fontSize: '34px', marginBottom: '20px' }}>
            {categories.find(c => c.id === active)?.label}
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {procedures[active].map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: '14px',
                  paddingLeft: '30px',
                  position: 'relative',
                  fontSize: '17px',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: green,
                    fontWeight: 'bold',
                  }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .responsive-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
