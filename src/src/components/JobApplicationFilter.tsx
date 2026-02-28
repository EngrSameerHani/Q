'use client'
import { getPublicCareers } from '@/app/lib/getCareers'
import { useRouter, useSearchParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'

interface Careers {
  status: string
  message: string
  data: [
    {
      id: number
      position: string
      deparment_id: number
      description: string
      open_date: string
      close_date: string
      is_active: boolean
      department: {
        id: number
        title: string
      }
    }
  ]
}

const JobApplicationFilter = () => {
  const [careers, setCareers] = useState<Careers>({
    status: '',
    message: '',
    data: [
      {
        id: 0,
        position: '',
        deparment_id: 0,
        description: '',
        open_date: '',
        close_date: '',
        is_active: false,
        department: {
          id: 0,
          title: '',
        },
      },
    ],
  })

  const [careerId, setCareerId] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const getAllCareers = async () => {
    const res = await getPublicCareers()
    setCareers(res)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setCareerId(value)

    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set('careerId', value)
    } else {
      params.delete('careerId')
    }

    router.push(`?${params.toString()}`)
  }

  useEffect(() => {
    getAllCareers()

    const careerIdParam = searchParams.get('careerId')
    if (careerIdParam) {
      setCareerId(careerIdParam)
    }
  }, [searchParams])

  return (
    <div>
      <h6>Filter Jobs by Position</h6>
      <select className="form-select mb-3 w-50" onChange={handleChange}>
        <option value="">All jobs positions</option>
        {careers.data.map((career) => (
          <option key={career.id} value={career.id}>
            {career.position}
          </option>
        ))}
      </select>
    </div>
  )
}

export default JobApplicationFilter
