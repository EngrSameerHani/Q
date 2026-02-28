'use client'
import React from 'react'
import AvailabilityCalendar from '../../../components/Schedules'
import { CreateScheduleAction } from '@/app/_actions/_actions'
import toast from 'react-hot-toast'

const AvailabilityPage: React.FC = () => {
  const handleUpdateAvailability = async (
    events: any[],
    examineDuration: string
  ) => {
    const schedule_days = events
    const examine_duration = examineDuration
    const formData = new FormData()
    formData.append('schedule_days', JSON.stringify(schedule_days))
    formData.append('examine_duration', examine_duration)
    const res = await CreateScheduleAction(formData)
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
          <AvailabilityCalendar
            onUpdateAvailability={handleUpdateAvailability}
          />
        </div>
      </div>
    </div>
  )
}

export default AvailabilityPage
