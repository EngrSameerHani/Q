import { cookies } from 'next/headers'
import React from 'react'
import Sidebar from './Sidebar'
import { FaBars, FaClipboard } from 'react-icons/fa'

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

const PatientSideBar = async () => {
  const userCookies = (await cookies()).get('user')
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  const items = [
    {
      id: 1,
      name: 'Dashboard',
      link: `/patient-dashboard`,
      icon: <FaBars />,
    },
    {
      id: 2,
      name: 'Appointments',
      link: `/patient-dashboard/appointments`,
      icon: <FaClipboard />,
    },
  ]

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default PatientSideBar
