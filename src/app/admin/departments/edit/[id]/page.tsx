import { getDepartmentById } from '@/app/lib/getDepartments'
import React from 'react'
import EditDepartment from '../../EditDepartment'

const EditDepartmentPage = async (props: {
  params: Promise<{ id: number }>
}) => {
  const params = await props.params
  const id = params.id

  const department = await getDepartmentById(id)

  return (
    <div>
      <EditDepartment department={department} />
    </div>
  )
}

export default EditDepartmentPage
