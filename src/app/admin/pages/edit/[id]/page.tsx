import EditPage from '@/components/EditPage'
import React from 'react'

const SingleEditPage = async (props: { params: Promise<{ id: number }> }) => {
  const params = await props.params
  const id = params.id
  return <EditPage id={id} />
}

export default SingleEditPage
