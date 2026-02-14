'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoFileTrayStacked, IoPeopleSharp, IoPower } from 'react-icons/io5'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { LogoutAction } from '@/app/_actions/_actions'

const Sidebar = ({
  items,
}: {
  items: {
    id: number
    name: string
    link: string
    icon: React.ReactNode
    children?: { id: number; name: string; link: string }[]
  }[]
}) => {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const toggleDropdown = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  return (
    <div
      style={{ backgroundColor: '#0B2D29' }}
      className="d-flex flex-column vh-100   p-2"
    >
      <div style={{ color: '#8AC6BD' }} className="flex-grow-1 overflow-auto">
        <ul className="list-unstyled">
          <li className="text-center py-3">
            <Link
              href="/"
              className="text-decoration-none  d-flex flex-column align-items-center"
            >
              <img
                src="/assets/photos/logo.png"
                alt="findtute logo"
                className="mb-2"
                width={200}
                height={60}
              />
              {/* <span className="fw-bold fs-5">QIH</span> */}
            </Link>
          </li>

          {items?.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <>
                  <a
                    onClick={() => toggleDropdown(item.id)}
                    style={{ color: 'inherit', textDecoration: 'none' }} // Prevents blue hover
                    className={`d-flex align-items-center py-2 px-3 ${
                      pathname === item.link ? 'fw-bold bg-secondary' : ''
                    }`}
                    role="button"
                  >
                    <span className="me-2">{item.icon}</span>
                    <span>{item.name}</span>
                    <span className="ms-auto">
                      {expandedItems.includes(item.id) ? (
                        <FaAngleUp />
                      ) : (
                        <FaAngleDown />
                      )}
                    </span>
                  </a>

                  {expandedItems.includes(item.id) && (
                    <ul className="list-unstyled ps-4">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            href={child.link}
                            className={`d-block py-1 text-decoration-none  ${
                              pathname === child.link
                                ? 'fw-bold bg-secondary'
                                : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  href={item.link}
                  className={`d-flex align-items-center py-2 px-3 text-decoration-none ${
                    pathname === item.link ? 'fw-bold bg-secondary' : ''
                  }`}
                >
                  <span className="me-2">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <a
          className="d-flex align-items-center py-2 px-3 text-decoration-none"
          role="button"
        >
          <form action={LogoutAction}>
            <span className="d-flex align-items-center">
              <button
                style={{ color: '#8AC6BD' }}
                type="submit"
                className="btn  text-decoration-none p-0"
              >
                Logout
              </button>
            </span>
          </form>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
