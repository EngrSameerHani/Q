import EditConsultant from '@/components/EditConsultant'
import React from 'react'

const EditConsultantPage = async (props: {
  params: Promise<{ id: number }>
}) => {
  const params = await props.params
  const id = params.id
  return (
    <div>
      <EditConsultant id={id} />
    </div>
  )
}

export default EditConsultantPage
