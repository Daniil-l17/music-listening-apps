'use client'
import { memo } from 'react'
import { Logo } from '../../СommonСomponents/logo/Logo'
import { usePathname } from 'next/navigation'
import { ButtomMenu } from '../ButtonMenu/ButtomMenu'
import { Menu1 } from '../Menu1/Menu1'
import { Menu2 } from '../Menu2/Menu2'
import { Redo2 } from 'lucide-react'
import { ModelAuthorization } from '../../СommonСomponents/ModelAuthorization/ModelAuthorization'
import { useDispatch } from 'react-redux'
import { actions } from '@/redux/slice/modelSlice'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/config/firebaseConfig'
export const Menu = memo(() => {
	const [user] = useAuthState(auth)
  const db = useDispatch()
	const pathname = usePathname()
	return (
		<div className='flex flex-col top-0 sticky h-full'>

			<div
				style={{ border: '1px solid #8585853c' }}
				className='bg-[#242424] w-[100px] flex justify-center px-4 pb-6 pt-2 rounded-2xl'>
				<Menu1 pathname={pathname} />
			</div>
			<div
				style={{ border: '1px solid #8585853c' }}
				className='px-4 pb-2 flex justify-center pt-6 w-[100px] bg-[#242424] rounded-2xl mt-3 h-[600px]'>
				<Menu2 pathname={pathname} />
			</div>
			<div className=' pb-[10px] justify-center flex-1 flex items-end'>
				{user ? (
					<ButtomMenu signOutModel={() => db(actions.openmodelsignOutAuth(true))} />
				) : (
					<div onClick={() => db(actions.openModel(true))} className='flex gap-2 text-[#cfcfcf] justify-center hover:text-[#7af5b6b1] hover:scale-110  text-lg items-center font-medium cursor-pointer'>
						<Redo2 /> <p>войти</p>{' '}
					</div>
				)}
			</div>
		</div>
	)
})
