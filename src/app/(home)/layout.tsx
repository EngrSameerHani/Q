import { cookies } from 'next/headers'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import NavbarSearch from '@/components/NavbarSearch'
import Topbar from '@/components/Topbar'

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

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let authUser: User | null = null
  const token = (await cookies()).get('token')?.value
  const userCookies = (await cookies()).get('user')

  try {
    if (userCookies && userCookies.value) {
      authUser = JSON.parse(userCookies.value)
    }
  } catch (error) {
    console.error('Error parsing user cookie:', error)
  }

  return (
    <div suppressHydrationWarning>
      <Topbar />
      <NavbarSearch />
      <Navbar token={token ?? ''} user={authUser} />
      {children}
      <Footer />
    </div>
  )
}
