'use client'

import { ConsultantDeleteAction } from '@/app/_actions/_actions'
import { getConsultants } from '@/app/lib/getConsultants'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { FiTrash } from 'react-icons/fi'

const DeleteConsultant = ({ id }: { id: number }) => {
  const router = useRouter()
  const handleDelete = async () => {
    const res = await ConsultantDeleteAction(id)
    if (res.status === 'success') {
      toast.success(res.message)
      router.refresh()
    } else {
      toast.error(res.message)
    }
  }

  return (
    <button onClick={handleDelete}>
      <FiTrash />
    </button>
  )
}

export default DeleteConsultant
