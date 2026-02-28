'use client'
import React, { useState } from 'react'

export default function Tests() {
  const [active, setActive] = useState('chemical-pathology')

  const categories = [
    { id: 'chemical-pathology', label: '🧪 Chemical Pathology' },
    { id: 'hormones', label: '🧬 Hormones & Endocrinology' },
    { id: 'immunology', label: '🦠 Immunology & Serology' },
    { id: 'cardiac', label: '❤️ Cardiac Markers' },
    { id: 'lipid', label: '🩸 Lipid Profile' },
    { id: 'liver-renal', label: '🧫 Liver & Renal Function' },
    { id: 'diabetes', label: '🍬 Diabetes & Metabolism' },
    { id: 'toxicology', label: '☠️ Toxicology Screening' },
    { id: 'hematology', label: '🧬 Hematology' },
    { id: 'microbiology', label: '🧫 Microbiology' },
    { id: 'blood-bank', label: '🩸 Blood Bank' },
    { id: 'histopathology', label: '🔬 Histopathology' },
  ]

  const services: Record<string, string[]> = {
    'chemical-pathology': [
      '25-OH Vitamin D',
      'Blood Gases',
      'ABGs with Lactate',
      'C Reactive Protein (CRP)',
      'Creatinine Clearance (24 hrs Urine)',
      'D-Dimers',
      'Procalcitonin (PCT)',
      'Serum Ammonia',
      'Serum Aldolase',
      'Serum Ascites Albumin Gradient',
      'Vitamin B12',
      'Folate',
    ],

    hormones: [
      'Anti-Mullerian Hormone (AMH)',
      'LH',
      'FSH',
      'Prolactin',
      'Estradiol',
      'Progesterone',
      'Serum Aldosterone',
      'Plasma Renin Level',
      'C-Peptide',
      'P. Insulin',
    ],

    immunology: [
      'Anti HCV',
      'HBsAg',
      'HIV',
      'Anti-TP (Syphilis)',
      'Torch Profile',
      'CMV IgG / IgM',
      'Toxo IgG / IgM',
      'Rubella IgG / IgM',
      'ANA (ELISA)',
      'Anti ds DNA',
      'Celiac Disease Profile (IgA / IgG)',
    ],

    cardiac: [
      'BNP',
      'Pro-BNP',
      'CK',
      'CK-MB',
      'High Sensitive Troponin-I',
    ],

    lipid: [
      'Total Cholesterol',
      'LDL Cholesterol',
      'HDL Cholesterol',
      'Triglycerides',
    ],

    'liver-renal': [
      'ALT',
      'AST',
      'ALP',
      'GGT',
      'Total Bilirubin',
      'Direct Bilirubin',
      'Albumin',
      'Total Protein',
      'Creatinine',
      'Urea',
      'Uric Acid',
    ],

    diabetes: [
      'HbA1c',
      'Fasting Glucose',
      'Random Glucose',
      'OGTT (75g)',
      'OGTT (100g)',
      'Glucose Challenge Test',
    ],

    toxicology: [
      'Urinary Amphetamine',
      'Urine Benzodiazepines',
      'Urine Cocaine',
      'Urine Marijuana (THC)',
      'Urine Methadone',
      'Urine Opiates',
      'Urine PCP',
      'Urine TCA',
    ],

    hematology: [
      'CBC',
      'PT / INR',
      'APTT',
      'ESR',
      'Peripheral Smear',
      'Reticulocyte Count',
      'Bone Marrow Aspiration',
      'Hemoglobin Electrophoresis',
      'Protein C / S',
      'Factor V Leiden',
      'G6PD',
    ],

    microbiology: [
      'Blood C/S',
      'Urine R/E',
      'Stool R/E',
      'AFB Smear',
      'Gram Stain',
      'KOH Preparation',
      'H. Pylori (Ag / Ab)',
      'ICT TB',
      'Brucella',
      'Malaria Parasite',
    ],

    'blood-bank': [
      'Blood Group',
      'Cross Match',
      'RCC',
      'FFP',
      'Platelets',
      'Single Donor Platelets',
      'DAT / IAT',
      'Type & Screen',
    ],

    histopathology: [
      'Tissue Biopsy',
      'Cytology',
      'FNAC',
    ],
  }

  const green = '#198916'

  return (
    <div style={{ padding: '60px 20px', background: '#f5f7fa' }}>
      <div className="responsive-grid" style={{ maxWidth: 1200, margin: 'auto', display: 'grid', gridTemplateColumns: '300px 1fr', gap: 40 }}>

        {/* Sidebar */}
        <div style={{ background: '#d9e4ec', padding: 25, borderRadius: 12 }}>
          <h3 style={{ marginBottom: 20 }}>Tests</h3>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                width: '100%',
                padding: 14,
                marginBottom: 10,
                borderRadius: 8,
                border: 'none',
                background: active === cat.id ? green : '#fff',
                color: active === cat.id ? '#fff' : '#000',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#fff', padding: 35, borderRadius: 14 }}>
          <h2 style={{ color: green }}>{categories.find(c => c.id === active)?.label}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {services[active].map((item, i) => (
              <li key={i} style={{ marginBottom: 12 }}>
                ✓ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
