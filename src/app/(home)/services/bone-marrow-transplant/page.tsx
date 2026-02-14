'use client'
import React, { useState } from 'react'

export default function BoneMarrowProcedures() {
  const [active, setActive] = useState<string>('collection')

  const green = '#198916'

  const categories = [
    { id: 'collection', label: '🧬 Collection & Processing' },
    { id: 'apheresis', label: '🩸 Apheresis Services' },
    { id: 'chemotherapy', label: '💉 Chemotherapy Services' },
    { id: 'daycare', label: '🏥 Day Care & Monitoring' },
    { id: 'infusion', label: '🧪 Infusion & Transfusion' },
    { id: 'laboratory', label: '🔬 Laboratory Procedures' },
  ]

  const services: Record<string, string[]> = {
    collection: [
      'BM 001 – Bone Marrow Harvesting Fee',
      'BM 002 – PBSC Collection',
      'BM 003 – Bone Marrow Processing',
      'BM 006 – Donor Lymphocyte Collection',
      'BM 007 – Donor Lymphocyte Infusion',
      'BM 008 – Cryopreservation',
    ],
    apheresis: [
      'BM 004 – Platelet Apheresis',
      'BM 005 – Leukapheresis',
      'BM 012 – Plasma Pheresis',
    ],
    chemotherapy: [
      'BM 013 – Chemotherapy Administration up to 1 Hour',
      'BM 014 – Chemotherapy Administration up to 4 Hours',
      'BM 015 – High Dose Chemotherapy (per day)',
      'BM 032 – Intrathecal Chemotherapy Administration',
      'BM 038 – Chemotherapy Administration (Subcutaneous)',
    ],
    daycare: [
      'BM 018 – Day Care Monitoring (up to 4 hours)',
      'BM 019 – Day Care Monitoring (more than 4 hours)',
      'BM 020 – Phlebotomy',
      'BM 021 – Phlebotomy with Fluid Replacement',
    ],
    infusion: [
      'BM 016 – Administration of RCC / Blood',
      'BM 017 – Administration of Platelets / FFP',
      'BM 009 – CV Line Dressing',
      'BM 010 – IV Cannulation',
      'BM 011 – Pentamidine Nebulization',
      'BM 033 – IV Fluids / Antibiotics (1–4 hrs)',
      'BM 034 – IV Fluids / Antibiotics (more than 4 hrs)',
      'BM 035 – Immunotherapy (less than 4 hrs)',
      'BM 036 – Immunotherapy (more than 4 hrs)',
      'BM 037 – IV / IM / SC Antibiotics (less than 30 min)',
    ],
    laboratory: [
      'BM – Bone Marrow Trephine',
      'BMAP – Bone Marrow Aspiration',
    ],
  }

  return (
    <div style={{ padding: '60px 20px', background: '#f5f7fa' }}>
      <div
        className="responsive-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '40px',
        }}
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
          <h3 style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 600 }}>
            Bone Marrow & Hematology
          </h3>

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
                transition: 'all 0.3s ease',
                background: active === cat.id ? green : '#fff',
                color: active === cat.id ? '#fff' : '#000',
                transform: active === cat.id ? 'translateX(4px)' : 'none',
                boxShadow:
                  active === cat.id
                    ? '0 4px 12px rgba(0,0,0,0.18)'
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
            animation: 'fadeSlide 0.35s ease',
          }}
        >
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: green }}>
            {categories.find(c => c.id === active)?.label}
          </h2>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {services[active].map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: '14px',
                  paddingLeft: '30px',
                  position: 'relative',
                  fontSize: '17px',
                  lineHeight: 1.6,
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

          <p
            style={{
              marginTop: '30px',
              fontSize: '14px',
              color: '#666',
              fontStyle: 'italic',
            }}
          >
            * Procedures effective from 26-06-2019 (revised on 01-09-2023)
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .responsive-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

