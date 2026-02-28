import EditSlide from '@/components/EditSlide'
import React from 'react'

const EditSlidePage = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params
  const id = params.id

  return (
    <div>
      <EditSlide id={id} />
    </div>
  )
}

export default EditSlidePage
