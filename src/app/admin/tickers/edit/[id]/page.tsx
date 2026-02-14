import { getTickersById } from '@/app/lib/getTickers'
import EditTickers from '@/components/EditTickers'
import React from 'react'



const page = async (props: {
    params: Promise<{ id: number }>
  }) => {

  const params = await props.params
  const id:number = params.id
  
  let allTickers = await getTickersById(id);

  return (
    <div>
        <EditTickers allTickers={allTickers} />
    </div>
  )
}

export default page