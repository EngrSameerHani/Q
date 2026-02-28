'use client'
import { CreateAdminScheduleAction } from '@/app/_actions/_actions'
import AdminAvailabilityCalendar from '@/components/AdminSchedules'
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const AdminConsultantSchedulePage = () => {
  const params = useParams()
  const getId = params.id
  const id = Number(getId)

  const handleUpdateAvailability = async (
    events: any[],
    examineDuration: string
  ) => {
    const schedule_days = events
    const examine_duration = examineDuration
    const formData = new FormData()
    formData.append('schedule_days', JSON.stringify(schedule_days))
    formData.append('examine_duration', examine_duration)
    const res = await CreateAdminScheduleAction(id, formData)
    if (res.status === 'success') {
      toast.success(res.message)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <div className="container py-4">
      <h3 className="mb-4">Set Your Availability</h3>
      <div className="card">
        <div className="card-body">
          <AdminAvailabilityCalendar
            onUpdateAvailability={handleUpdateAvailability}
            consultantId={id}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminConsultantSchedulePage
