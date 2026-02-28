'use client'

import { motion } from 'framer-motion'

export default function PartnersLogos() {
  const logos = Array.from({ length: 49 }, (_, i) => {
    const filename = `download (${i + 1}).png`
    const safeFilename = encodeURIComponent(filename) // encode spaces, parentheses, etc.
    return {
      id: i + 1,
      src: `/assets/images/departments/${safeFilename}`,
    }
  })

  return (
    <div className="partners-grid">
      {logos.map((logo, index) => {
        const row = Math.floor(index / 5)
        const fromLeft = row % 2 === 0

        return (
          <motion.div
            key={logo.id}
            initial={{ x: fromLeft ? -80 : 80, opacity: 0, scale: 0.85 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.04,
              ease: 'easeOut',
            }}
            className="partner-logo"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logo.src} alt={`Partner ${logo.id}`} />
          </motion.div>
        )
      })}

      <style jsx>{`
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 60px 60px; /* row-gap 60px, column-gap 60px */
          margin-top: 60px;
          justify-items: center;
          padding: 0 20px;
        }

        /* Center last row if fewer than 5 logos */
        .partners-grid > :nth-last-child(-n + 5) {
          justify-self: center;
        }

        .partner-logo {
          background: #fff;
          height: 150px;
          width: 100%;
          padding: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .partner-logo img {
          max-width: 100%;
          max-height: 90px;
          object-fit: contain;
        }

        @media (max-width: 992px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 45px 45px;
          }
        }

        @media (max-width: 576px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 30px;
          }
        }
      `}</style>
    </div>
  )
}



