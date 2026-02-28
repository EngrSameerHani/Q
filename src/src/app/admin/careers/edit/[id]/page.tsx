import EditCareer from '@/components/EditCareer'
import React from 'react'

const EditCareerPage = async (props: { params: Promise<{ id: number }> }) => {
  const { id } = await props.params

  return <EditCareer id={id} />
}

export default EditCareerPage
