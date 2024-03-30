import { Loading } from '@/components/СommonСomponents/Loading/Loading'
import React from 'react'

const loading = () => {
  return (
    <div className='h-[100vh] bg-[#181718] px-6 rounded-2xl flex justify-center items-center'>
      <Loading/>
    </div>
  )
}

export default loading