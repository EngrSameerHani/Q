'use client'
import React, { useState } from 'react'

export default function Cardiology() {
  const [active, setActive] = useState<string>('non-invasive')

  const categories = [
    { id: 'non-invasive', label: '🫀 Non-Invasive Cardiology' },
    { id: 'invasive', label: '💉 Invasive / Interventional Procedures' },
    { id: 'vascular', label: '🩺 Vascular & Doppler Studies' },
    { id: 'specialized', label: '👶 Specialized Cardiac Services' },
  ]

  const services: Record<string, string[]> = {
    'non-invasive': [
      'ECG 12 Leads',
      'ECG 12 Leads Portable',
      'Exercise Tolerance Test (ETT)',
      '24 Hours Holter Monitoring',
      '48 Hours Holter Monitoring',
      'Transthoracic Echocardiography',
      'Echo Follow Up',
      'Echo (On Call)',
    ],
    invasive: [
      'Transesophageal Echo (TEE)',
      'Dobutamine Stress Echo (DSE)',
      'Pericardiocentesis Under Echo Guidance',
      'Bubble Echo',
    ],
    vascular: [
      'Carotid Ultrasound / Doppler',
      'Extremities Arterial Doppler – Upper Limbs',
      'Extremities Arterial Doppler – Lower Limbs',
      'Extremities Venous Doppler – Upper Limbs',
      'Extremities Venous Doppler – Lower Limbs',
    ],
    specialized: [
      'Fetal Echocardiography',
      'Pediatric Echo',
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
          <h3 style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 600 }}>
            Cardiology Services
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

      {/* Optional Contact Section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '30px auto 0',
          fontSize: '18px',
          fontWeight: 500,
        }}
      >
        <p>🫀 Advanced Cardiac Diagnostics & Interventions</p>
        <p>📍 Available 24/7 | Experienced Cardiologists | Modern Equipment</p>
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

