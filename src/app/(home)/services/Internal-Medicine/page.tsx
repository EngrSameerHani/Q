'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function InternalMedicine() {
  const green = '#198916'

  const services = [
    'Acute & Chronic Disease Management',
    'Diabetes & Hypertension Care',
    'Infectious & Febrile Illnesses',
  ]

  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        position: 'relative',
        padding: '2px',
        borderRadius: '18px',
        background: `linear-gradient(130deg, ${green}, #7ed957, ${green})`,
        boxShadow: '0 10px 35px rgba(0,0,0,0.15)',
      }}
    >
      {/* INNER CARD */}
      <div
        style={{
          background: '#fff',
          padding: '45px',
          borderRadius: '16px',
        }}
      >
        {/* HEADING */}
        <div style={{ marginBottom: 25 }}>
          <h2
            style={{
              fontSize: '34px',
              marginBottom: '10px',
              fontWeight: 700,
              letterSpacing: '-0.5px'
            }}
          >
            Internal Medicine
          </h2>

          {/* animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8 }}
            style={{
              height: 4,
              borderRadius: 4,
              background: green
            }}
          />
        </div>

        {/* LIST */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {services.map((itemText, i) => (
            <motion.li
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              style={{
                marginBottom: '18px',
                padding: '16px 18px 16px 55px',
                borderRadius: 12,
                position: 'relative',
                fontSize: '17px',
                background: '#f8fafc',
                cursor: 'default',
                transition: '0.3s',
              }}
            >
              {/* ICON */}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  position: 'absolute',
                  left: 18,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: green,
                  color: '#fff',
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  boxShadow: `0 0 0 0 rgba(25,137,22,0.6)`
                }}
              >
                ✓
              </motion.span>

              {itemText}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
