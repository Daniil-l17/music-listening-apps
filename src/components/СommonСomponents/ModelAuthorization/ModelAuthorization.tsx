import { useDispatch } from 'react-redux'
import style from './model.module.scss'
import { actions } from '@/redux/slice/modelSlice'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, dbfirebase } from '@/config/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export const ModelAuthorization = () => {
	const db = useDispatch()
	const [authregistr, setauthregistr] = useState({ email: '', password: '' })
	const [ldsds, setSLASds] = useState<'registr' | 'login'>('registr')
	const registr = async () => {
		if (ldsds === 'registr') {
			try {
				createUserWithEmailAndPassword(auth, authregistr.email.trim(), authregistr.password.trim())
				await setDoc(doc(dbfirebase, 'users', authregistr.email), {
					likeTrack: [],
				})
				db(actions.openModel(false))
			} catch {
				
			}
		} else if (ldsds === 'login') {
			try {
				signInWithEmailAndPassword(auth, authregistr.email.trim(), authregistr.password.trim())
				db(actions.openModel(false))
			} catch {
				
			}
		}
	}

	return (
		<div onClick={() => db(actions.openModel(false))} className={style.overlay}>
			<div onClick={(e) => e.stopPropagation()} className={`${style.modal} flex flex-col overlay-show`}>
				<h2>{ldsds === 'login' ? 'Вход' : 'Регестрация'}</h2>
				<form className='flex justify-center gap-6 flex-col' action=''>
					<div className='flex flex-col gap-6'>
						<div className='form__group field'>
							<input
								type='input'
								className='form__field'
								placeholder='Email'
								value={authregistr.email}
								name='email'
								onChange={(e) =>
									setauthregistr((prev) => ({
										...prev,
										email: e.target.value,
									}))
								}
								id='email'
								required
							/>
							<label htmlFor='name' className='form__label'>
								Email
							</label>
						</div>
						<div className='form__group field'>
							<input
								type='password'
								className='form__field'
								placeholder='пороль'
								name='password'
								onChange={(e) =>
									setauthregistr((prev) => ({
										...prev,
										password: e.target.value,
									}))
								}
								value={authregistr.password}
								id='password'
								required
							/>
							<label htmlFor='name' className='form__label'>
								Password
							</label>
						</div>
					</div>
				</form>
				<div className=' w-full flex-1 gap-3  flex justify-center items-end'>
					<div className='flex w-full items-center justify-between'>
						<p onClick={() => setSLASds((prev) => (prev === 'registr' ? 'login' : 'registr'))} className=' cursor-pointer font-medium'>
							{ldsds === 'login' ? 'Нет аккаунта??' : 'Войти в аккаунт'}
						</p>
						<button onClick={registr} className='bg-[#35634c] w-[200px] px-8 py-2 rounded-xl'>
							{ldsds === 'login' ? 'Вход' : 'Регестрация'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
