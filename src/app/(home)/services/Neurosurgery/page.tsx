'use client'
import React, { useState } from 'react'

export default function Neurosurgery() {
  const [active, setActive] = useState<string>('cranial')

  const green = '#198916'

  const categories = [
    { id: 'cranial', label: '🧠 Cranial (Brain) Procedures' },
    { id: 'spinal', label: '🦴 Spinal Procedures' },
    { id: 'neuro-trauma', label: '🚑 Neuro-Trauma Procedures' },
    { id: 'csf', label: '💧 CSF Diversion & Hydrocephalus' },
    { id: 'pediatric', label: '👶 Pediatric Neurosurgery' },
    { id: 'functional', label: '🎯 Functional Neurosurgery' },
    { id: 'peripheral', label: '🖐 Peripheral Nerve Surgery' },
    { id: 'endoscopic', label: '🔬 Endoscopic & Minimally Invasive' },
    { id: 'emergency', label: '⚡ Emergency Neurosurgery' },
    { id: 'implants', label: '🧩 Implants & Devices' },
  ]

  const services: Record<string, string[]> = {
    cranial: [
      'Craniotomy (trauma / tumor / hematoma)',
      'Decompressive craniectomy',
      'Burr hole evacuation (SDH / EDH)',
      'Tumor excision (glioma, meningioma, metastasis)',
      'Stereotactic brain biopsy',
      'Aneurysm clipping',
      'AVM (arteriovenous malformation) surgery',
      'Intracerebral hemorrhage evacuation',
      'Skull base surgery',
      'Brain abscess drainage',
    ],
    spinal: [
      'Laminectomy',
      'Discectomy (cervical / thoracic / lumbar)',
      'Microdiscectomy',
      'Spinal fusion (PLIF / TLIF / ALIF)',
      'Spinal tumor excision',
      'Spinal decompression surgery',
      'Vertebroplasty / Kyphoplasty',
      'Spinal fixation (pedicle screw system)',
      'Syringomyelia surgery',
      'Tethered cord release',
    ],
    'neuro-trauma': [
      'Elevation of depressed skull fracture',
      'CSF leak repair',
      'Penetrating brain injury surgery',
      'Acute trauma decompression',
      'Cranioplasty (bone flap replacement)',
    ],
    csf: [
      'Ventriculoperitoneal (VP) shunt insertion',
      'Ventriculoatrial (VA) shunt',
      'Ventriculopleural shunt',
      'External ventricular drain (EVD)',
      'Endoscopic third ventriculostomy (ETV)',
      'Shunt revision / removal',
    ],
    pediatric: [
      'Myelomeningocele repair',
      'Encephalocele repair',
      'Craniosynostosis correction',
      'Pediatric VP shunt insertion',
      'Pediatric brain tumor surgery',
    ],
    functional: [
      'Deep brain stimulation (DBS)',
      'Vagus nerve stimulation (VNS)',
      'Epilepsy surgery',
      'Pain pump implantation',
      'Intrathecal baclofen pump',
    ],
    peripheral: [
      'Carpal tunnel release',
      'Ulnar nerve decompression',
      'Brachial plexus repair',
      'Peripheral nerve tumor excision',
      'Nerve repair / grafting',
    ],
    endoscopic: [
      'Endoscopic pituitary surgery (transsphenoidal)',
      'Neuroendoscopy',
      'Endoscopic cyst fenestration',
      'Minimally invasive spine surgery (MISS)',
    ],
    emergency: [
      'Emergency craniotomy',
      'Emergency burr holes',
      'EVD in raised intracranial pressure (ICP)',
      'Acute spinal cord decompression',
    ],
    implants: [
      'Cranioplasty (titanium / PMMA)',
      'Ommaya reservoir insertion',
      'ICP monitor insertion',
      'Neuro-navigation guided surgery',
    ],
  }

  return (
    <div style={{ padding: '60px 20px', background: '#f5f7fa', minHeight: '100vh' }}>
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
          <h3 style={{ marginBottom: 20, fontSize: 22, fontWeight: 600 }}>
            Neurosurgery
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
          <h2 style={{ fontSize: 34, marginBottom: 20, color: green }}>
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
