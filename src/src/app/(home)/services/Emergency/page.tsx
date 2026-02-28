'use client'
import React, { useState } from 'react'

export default function EmergencyTraumaCare() {
  const [active, setActive] = useState<string>('always-ready')

  const categories = [
    { id: 'always-ready', label: '🚑 Always Open. Always Ready.' },
    { id: 'comprehensive', label: '🧠 Comprehensive Emergency & Trauma Services' },
    { id: 'rapid-diagnosis', label: '🔬 Rapid Diagnosis. Faster Treatment.' },
    { id: 'critical-care', label: '🩸 Advanced Critical Care & Resuscitation' },
    { id: 'fast-track', label: '⚡ Fast-Track Emergency Services' },
    { id: 'patient-support', label: '🤝 Patient-First Support' },
    { id: 'why-choose', label: 'Why Choose Quaid-e-Azam International Hospital?' },
  ]

  const services: Record<string, string[]> = {
    'always-ready': [
      '24/7 Emergency Services including nights, weekends, and holidays',
      'Consultant-led emergency care with senior specialists available at all times',
      'Registrar-level doctors available 24/7 for immediate assessment and coordination',
    ],
    'comprehensive': [
      '🚗 Accident & Polytrauma Care — Advanced management of road traffic accidents, falls, and multiple injuries with rapid stabilization and surgical support.',
      '❤️ Cardiac Emergencies — Immediate treatment for chest pain, heart attacks, cardiac arrest, and life-threatening rhythm disorders.',
      '🧠 Stroke Emergency Care — Fast evaluation and emergency management for stroke patients — because time saves brain.',
      '🫁 Respiratory Emergencies — Emergency care for breathlessness, asthma attacks, COPD exacerbations, and respiratory failure.',
      '🦴 Orthopedic & Trauma Services — Emergency fracture care, dislocations, splinting, and trauma surgeries.',
      '👶 Pediatric Emergencies — Safe, compassionate, and prompt emergency care for infants and children.',
    ],
    'rapid-diagnosis': [
      '24/7 Emergency Laboratory Services',
      '24/7 Radiology Services (X-ray, CT Scan, Ultrasound)',
      'Dedicated emergency imaging support for faster reporting and clinical decisions',
    ],
    'critical-care': [
      'Fully equipped resuscitation bays',
      'Advanced life-support systems and ventilators',
      'Immediate stabilization for critically ill and trauma patients',
    ],
    'fast-track': [
      'Quick assessment and treatment for non-critical emergencies to reduce waiting time and ensure faster discharge.',
    ],
    'patient-support': [
      '24/7 Patient Care Desk for guidance on admission, billing, and discharge',
      'Clear communication and coordinated care during emergency situations',
    ],
    'why-choose': [
      'Experienced emergency & trauma specialists',
      'Rapid diagnosis and treatment',
      'Dedicated emergency infrastructure',
      'Compassionate, patient-focused care',
      'Complete emergency services under one roof',
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
            Emergency & Trauma Care
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
          <h2 style={{ fontSize: '34px', marginBottom: '20px', color: green }}>
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

      {/* Emergency Helpline */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '30px auto 0',
          fontSize: '18px',
          fontWeight: 500,
        }}
      >
        <p>🚨 Emergency Helpline: <strong>051-2315219</strong></p>
        <p>📍 Open 24/7 | Walk-In | Ambulance Services Available</p>
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

