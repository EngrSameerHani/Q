'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function PainManagement() {
  const green = '#198916'

  const services = [
    'Chronic Pain Clinics',
    'Nerve Blocks',
    'Spine Pain Procedures',
  ]

  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        padding: '2px',
        borderRadius: '18px',
        background: `linear-gradient(130deg, ${green}, #7ed957, ${green})`,
        boxShadow: '0 10px 35px rgba(0,0,0,0.15)',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '45px',
          borderRadius: '16px',
        }}
      >
        {/* TITLE */}
        <div style={{ marginBottom: 25 }}>
          <h2 style={{ fontSize: 34, marginBottom: 10, fontWeight: 700 }}>
            Pain Management
          </h2>

          <motion.div
            initial={{ width: 250 }}
            animate={{ width: 250 }}
            transition={{ duration: 0.8 }}
            style={{
              height: 4,
              borderRadius: 4,
              background: green,
            }}
          />
        </div>

        {/* SERVICES LIST */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {services.map((text, i) => (
            <motion.li
              key={i}
              variants={item}
              whileHover={{ scale: 1.04 }}
              style={{
                marginBottom: 18,
                padding: '16px 18px 16px 55px',
                borderRadius: 12,
                position: 'relative',
                fontSize: 17,
                background: '#f8fafc',
                boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
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
                }}
              >
                ✓
              </motion.span>

              {text}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}