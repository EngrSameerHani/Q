"use client"

import React from "react"

type Person = {
  name: string
  roles?: string[]
  image?: string
}

const page = () => {
  const executiveBoard: Person[] = [
    {
      name: "Dr. Shaukat Ali Bangash",
      roles: ["Founder & Chief Executive Officer"],
      image: "/assets/images/departments/DrShb.jpeg",
    },
    {
      name: "Mr. Salman Ali Bangash",
      roles: ["Board Member"],
      image: "/assets/images/departments/Salman Ali Bangash.jpg",
    },
    {
      name: "Mr. Hyder Ali Bangash",
      roles: ["Board Member"],
      image: "/assets/images/departments/Haider Ali Bangash.jpeg",
    },
    {
      name: "Abdul Rahman Memon",
      roles: ["Board Member", "Company Secretary", "Company CFO"],
      image: "/assets/images/departments/Abdul Rehman Memon.jpeg",
    },
    {
      name: "Ms. Sara Rajpoot",
      roles: ["Board Member"],
    },
    {
      name: "Ms. Mahnoor Zainab",
      roles: ["Board Member"],
    },
    {
      name: "Ms. Fatima Bangash",
      roles: ["Board Member"],
    },
  ]

  return (
    <div className="container executive-wrapper">
      <h3 className="section-title">Executive Board</h3>

      <div className="board-grid">
        {executiveBoard.map((person, index) => (
          <div className="board-card" key={index}>
            {person.image && (
              <div className="image-wrapper">
                <img src={person.image} alt={person.name} />
              </div>
            )}

            <h4>{person.name}</h4>

            {person.roles?.map((role, i) => (
              <p key={i}>{role}</p>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .executive-wrapper {
          padding: 40px 0;
        }

        .section-title {
          font-weight: 600;
          margin-bottom: 25px;
        }

        .board-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .board-card {
          background: #fff;
          border-radius: 10px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 0 0 1px #eee;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .board-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        }

        .image-wrapper {
          background: #eef2f5;
          border-radius: 26px;
          padding: 14px;
          margin-bottom: 16px;
        }

        .image-wrapper img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 22px;
        }

        .board-card h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .board-card p {
          font-size: 14px;
          color: #6b7280;
          margin: 2px 0;
        }
      `}</style>
    </div>
  )
}

export default page

