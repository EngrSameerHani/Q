'use client'
import { getTickers } from '@/app/lib/getTickers'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Ticker {
  id: number
  title: string
  url: string
  created_at: string
}

const Topbar = () => {
  const [tickers, setTickers] = React.useState<Ticker[]>([])

  const getAllTickers = async () => {
    const res = await getTickers()
    setTickers(res.data)
  }

  useEffect(() => {
    getAllTickers()
  }, [])

  return (
    <div className="top-bar py-2">
      <div className="container d-flex justify-content-between align-items-center">

        {/* LEFT */}
        <div className="d-flex align-items-center left-section">

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/qihofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/qih_official?igsh=MWtub2MzbWo4eHhnYg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@Quaideazam-intl-hospital"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>

            {/* LinkedIn without href */}
            <span>
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>

          {/* Ticker */}
          <div className="ticker-container">
            <div className="ticker-content">
              {tickers?.length > 0 ? (
                tickers.map((ticker) => (
                  <div key={ticker.id} className="ticker-item">
                    <Link
                      href={ticker.url}
                      className="text-white text-decoration-none"
                    >
                      {ticker.title}
                    </Link>
                  </div>
                ))
              ) : (
                <p className="m-0 text-white">No tickers available</p>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="d-none d-lg-flex align-items-center contact-info">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+92518449100">+92 (051) 8449100</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@qih.com.pk">info@qih.com.pk</a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .top-bar {
          background-color: #343a40;
          color: white;
        }

        .left-section {
          width: 70%;
          gap: 20px;
        }

        /* Social Icons */
        .social-icons {
          display: flex;
          gap: 12px;
        }
        .social-icons a,
        .social-icons span {
          color: white;
          font-size: 14px;
          transition: 0.3s;
          cursor: pointer;
        }
        .social-icons a:hover,
        .social-icons span:hover {
          color: #ffc107;
        }

        /* Ticker */
        .ticker-container {
          overflow: hidden;
          white-space: nowrap;
          flex: 1;
        }
        .ticker-content {
          display: flex;
          min-width: 100%;
          animation: tickerScroll 30s linear infinite;
        }
        .ticker-item {
          padding-right: 25px;
        }

        /* Contact */
        .contact-info {
          gap: 20px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .contact-item i {
          color: #ffc107;
        }
        .contact-item a {
          color: white;
          text-decoration: none;
        }

        @keyframes tickerScroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

export default Topbar
