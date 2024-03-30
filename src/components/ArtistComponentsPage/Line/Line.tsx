import { memo } from "react"


export const Line = memo(() => {
  return (
    <div
    className='bg-[#63636363]'
    style={{background: '#63636363', width: '100%', height: '2px', marginTop: '20px'}}>
    </div>
  )
})
