'use client'
import { Menu } from '@/components/MenuComponents/menu/Menu'
import style from './style.module.scss'
import { Footer } from '@/components/FooterComponents/Footer/Footer'
import { ModelAuthorization } from '@/components/СommonСomponents/ModelAuthorization/ModelAuthorization'
import { useAppSelector } from '@/hooks/useAppSelector'
import { SignOuntModel } from '@/components/СommonСomponents/signOutModel/SignOut'

export const MainProvaderLayout = ({ children }: { children: React.ReactNode }) => {
	const model = useAppSelector((state) => state.model)
	return (
		<div className={style.mainlayout}>
			<Menu />
			<div style={{ flex: '1 1 0%' }} className='flex  flex-col'>
				<div className={style.provaider}>{children}</div>
				<Footer />
				{model.modelauth && <ModelAuthorization />}
				{model.modelsignOutAuth && <SignOuntModel />}
			</div>
		</div>
	)
}
