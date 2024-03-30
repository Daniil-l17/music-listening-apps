'use client'
import {auth} from '@/config/firebaseConfig'
import {ChevronRight} from 'lucide-react'
import Link from 'next/link'
import {redirect} from 'next/navigation'
import {useLayoutEffect} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'

export const MyProfileProvaderPage = () => {
  const [user, loading] = useAuthState(auth)

  useLayoutEffect(() => {
    if (!user) {
      redirect('/')
    }
  }, [user])

  return (
    <div>
      <div className='flex gap-1 mb-4 items-center cursor-pointer w-[260px]'>
        <Link href={'/'}>
          <h2
            className='font-semibold'
            style={{
              color: '#adadad',
            }}>
            Главная
          </h2>
        </Link>
        <ChevronRight width={20} />
        <h2
          className='font-semibold'
          style={{
            color: '#adadad',
          }}>
          my-profile/
        </h2>
        <ChevronRight width={20} />
        <h2 className='font-semibold'>{user?.email}</h2>
        <ChevronRight width={20} />
      </div>

      {loading ? (
        <p>loading....</p>
      ) : (
        <div>
          <h2 className=' text-[20px]'>{user?.email}</h2>
          <div className='flex items-center gap-2 mt-2'>
            <h2>Аккаунт создан:</h2>
            <p>{user?.metadata.creationTime}</p>
          </div>
        </div>
      )}
    </div>
  )
}
