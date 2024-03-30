'use client'
import {auth} from '@/config/firebaseConfig'
import {HeartPulse, UserRound} from 'lucide-react'
import Link from 'next/link'
import {useAuthState} from 'react-firebase-hooks/auth'

const menu2 = [
  {icon: <HeartPulse width={30} height={30} />, link: '/my-collection'},
  {icon: <UserRound width={30} height={30} />, link: '/my-profile'},
]

export const Menu2 = ({pathname}: {pathname: string}) => {
  const [user] = useAuthState(auth)

  return (
    <ul className='flex flex-col items-center gap-4 mt-2'>
      {menu2.map((item, index) => {
        if (item.link === '/my-profile') {
          if (!user) {
            return null
          }
        }
        return (
          <Link key={index} href={`${item?.link}`}>
            <li
              key={index}
              style={pathname === item?.link ? {color: '#7af5b6b1'} : {color: '#cfcfcf'}}
              className={`flex ${
                pathname === item?.link && 'text-[#7af5b6b1] hover:scale-100  '
              } cursor-pointer hover:text-[#7af5b6b1]  hover:scale-[1.17] rounded-xl items-center px-2 py-2  transition duration-100 gap-4 text-[20px] text-[#cfcfcf] font-medium`}>
              <span className=' '>{item?.icon}</span>
            </li>
          </Link>
        )
      })}
    </ul>
  )
}
