import { cookies } from 'next/headers'
import React, { use } from 'react'
import {
  IoChatbubbles,
  IoFileTrayStacked,
  IoPeopleSharp,
  IoTv,
} from 'react-icons/io5'
import Sidebar from './Sidebar'
import { FaBars, FaBuilding, FaClipboard, FaFile } from 'react-icons/fa'
import {
  FaBriefcase,
  FaBusinessTime,
  FaDollarSign,
  FaGear,
  FaRegWindowMaximize,
  FaTicket,
  FaUser,
  FaUserDoctor,
  FaUserLarge,
} from 'react-icons/fa6'
import { FiSliders } from 'react-icons/fi'

interface User {
  id: string
  name: string
  email: string
}

const AdminSideBar = async () => {
  const userCookies = (await cookies()).get('user')
  let user: User | null = null

  try {
    if (userCookies && userCookies.value) {
      user = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  const generateRoomName = (length: number) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    const charactersLength = characters.length

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }

  const items = [
    {
      id: 1,
      name: 'Dashboard',
      link: `/admin`,
      icon: <FaBars />,
    },
    {
      id: 2,
      name: 'Departments',
      link: `/admin/departments`,
      icon: <FaBuilding />,
    },
    {
      id: 3,
      name: 'Consultants',
      link: `/admin/consultants`,
      icon: <FaUserDoctor />,
    },
    {
      id: 4,
      name: 'Appointments',
      link: `/admin/appointments`,
      icon: <FaClipboard />,
    },
    {
      id: 5,
      name: 'Careers',
      link: `/admin/careers`,
      icon: <FaBusinessTime />,
    },
    {
      id: 6,
      name: 'Job Applications',
      link: `/admin/job-applications`,
      icon: <FaBriefcase />,
    },
    {
      id: 7,
      name: 'Pages',
      link: `/admin/pages`,
      icon: <FaRegWindowMaximize />,
    },
    {
      id: 8,
      name: 'Slides',
      link: `/admin/slides`,
      icon: <FiSliders />,
    },
    {
      id: 9,
      name: 'Tickers',
      link: `/admin/tickers`,
      icon: <FaTicket />,
    },
    {
      id: 10,
      name: 'Settings',
      link: `/admin/settings`,
      icon: <FaGear />,
    },
    {
      id: 11,
      name: 'Users',
      link: `/admin/users`,
      icon: <FaUser />,
    },
  ]

  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default AdminSideBar
