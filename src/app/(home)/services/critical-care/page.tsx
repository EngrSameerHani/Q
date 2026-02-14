'use client'
import React, { useState } from 'react'

export default function EmergencyCriticalCare() {
  const [active, setActive] = useState<'emergency' | 'icu'>('emergency')

  return (
    <div
      style={{
        padding: '60px 20px',
        background: '#f5f7fa',
        minHeight: '100vh',
      }}
    >
      {/* PAGE WRAPPER */}
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
            Emergency & Critical Care
          </h3>

          {[
            { id: 'emergency', label: 'Emergency Services' },
            { id: 'icu', label: 'Critical Care / ICU' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setActive(btn.id as any)}
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
                background: active === btn.id ? '#198916' : '#fff',
                color: active === btn.id ? '#fff' : '#000',
                boxShadow:
                  active === btn.id
                    ? '0 3px 10px rgba(0,0,0,0.15)'
                    : '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              {btn.label}
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
          {active === 'emergency' && (
            <>
              <h2 style={{ fontSize: '34px', marginBottom: '20px' }}>
                Emergency Services (24/7)
              </h2>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Trauma & Accident Management',
                  'Cardiac Emergencies',
                  'Stroke Management',
                  'Medical & Surgical Emergencies',
                ].map((item, i) => (
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
                        color: '#dc3545',
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {active === 'icu' && (
            <>
              <h2 style={{ fontSize: '34px', marginBottom: '20px' }}>
                Critical Care / ICU
              </h2>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Medical ICU (MICU)',
                  'Surgical ICU (SICU)',
                  'Cardiac Care Unit (CCU)',
                  'Neonatal ICU (NICU)',
                  'Pediatric Intensive Care Unit (PICU)',
                  'Liver ICU (LICU)',
                  'Bone Marrow Transplant ICU (BMTICU)',
                  'Cardiac Thoracic ICU (CT-ICU)',
                ].map((item, i) => (
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
                        color: '#dc3545',
                        fontWeight: 'bold',
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* RESPONSIVE FIX */}
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
