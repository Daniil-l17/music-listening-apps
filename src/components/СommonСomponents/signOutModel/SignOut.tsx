import { useDispatch } from 'react-redux'
import style from './model.module.scss'
import { actions } from '@/redux/slice/modelSlice'
import { auth } from '@/config/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'


export const SignOuntModel = () => {
	const db = useDispatch()
  const [user] = useAuthState(auth)
  console.log(user);
  
	const signOutAuth = () => {
		try {
			signOut(auth)
			db(actions.openmodelsignOutAuth(false))
		} catch {
			console.log('error')
		}
	}

	return (
		<div
			onClick={() => db(actions.openmodelsignOutAuth(false))}
			className={style.overlay}>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${style.modal} flex flex-col overlay-show`}>
				<div className='flex gap-4 items-center'>
					<button
						onClick={() => db(actions.openmodelsignOutAuth(false))}
						className='bg-[#35634c] flex justify-center  w-[100px] px-8 py-2 rounded-xl'>
						отменить
					</button>
					<button
						onClick={signOutAuth}
						className='bg-[#cf554a] w-[300px] px-8 py-2 rounded-xl'>
						Выйти
					</button>
				</div>
			</div>
		</div>
	)
}
