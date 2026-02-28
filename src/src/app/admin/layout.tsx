import React from 'react'
import AdminSideBar from '@/components/AdminPannel'
import { cookies } from 'next/headers'
import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  roles: [
    {
      id: number
      name: string
    }
  ]
}

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const token = (await cookies()).get('token')?.value

  return (
    <>
      <div className="d-flex min-vh-100" suppressHydrationWarning>
        {/* Sidebar: Fixed */}
        <div
          style={{
            width: '16rem', // Fixed width for sidebar
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            backgroundColor: '#0047ab', // Adjust color
            zIndex: 1000,
            overflowY: 'auto', // Allow sidebar scrolling if content is long
          }}
        >
          <AdminSideBar />
        </div>

        {/* Main Content: Push Right to Avoid Overlap */}
        <div
          style={{
            flex: 1,
            marginLeft: '16rem', // Offset to prevent overlap
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden', // Prevent full-page scrolling
          }}
        >
          {/* Scrollable Children Content */}
          <main
            className="p-0 p-md-4 p-lg-5 bg-light"
            style={{
              flexGrow: 1,
              overflowY: 'auto', // Allows scrolling inside content
              padding: '20px',
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
