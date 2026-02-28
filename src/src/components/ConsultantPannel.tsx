import { cookies } from 'next/headers'
import React from 'react'
import Sidebar from './Sidebar'
import { FaBars, FaClipboard } from 'react-icons/fa'
import { GrSchedule } from 'react-icons/gr'

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

const ConsultantSideBar = async () => {
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
      link: `/consultant-dashboard`,
      icon: <FaBars />,
    },
    {
      id: 2,
      name: 'Appointments',
      link: `/consultant-dashboard/appointments`,
      icon: <FaClipboard />,
    },
    {
      id: 3,
      name: 'Schedules',
      link: `/consultant-dashboard/schedules`,
      icon: <GrSchedule />,
    },
  ]

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default ConsultantSideBar
