import { getAppointmentById } from '@/app/lib/getAppointments'
import EditAppointments from '@/components/EditAppointments'
import React from 'react'

const page = async (props: {
    params: Promise<{ id: number }>
  }) => {
    const params = await props.params
    const id = params.id;
     const appointment = await getAppointmentById(id);
  return (
    <div>
        <EditAppointments appointment={appointment}/>
    </div>
  )
}

export default page