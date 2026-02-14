import BookAppointment from '@/components/BookAppointment'
import React from 'react'

const BookAppointmentPage = async (props: {
  searchParams: Promise<{ departmentId: number; consultantId: number }>
}) => {
  const params = await props.searchParams
  const departmentId = params.departmentId
  const consultantId = params.consultantId

  return (
    <div>
      <BookAppointment
        departmentId={departmentId}
        consultantId={consultantId}
      />
    </div>
  )
}

export default BookAppointmentPage
