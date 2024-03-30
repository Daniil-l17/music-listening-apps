import { RefObject, memo } from "react"




export const FooterBar = memo(({clickRef,progress,chewidth}:{clickRef: RefObject<HTMLMediaElement>,progress:number,chewidth: (e:any) => void}) => {
  return (
    <span
    ref={clickRef}
    onClick={chewidth}
    style={{width: '99%',display:'flex',height: '13px',borderTopLeftRadius: '7px',borderTopRightRadius: '7px'}}
    className='w-[1200px] cursor-pointer bg-[#7f7f7f] '>
    <div
      style={{ width: `${progress}%`,borderTopLeftRadius: '7px',transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      className={`  h-full bg-[#678e6fdc] `}></div>
  </span>
  )
})
