import { Home, Search } from 'lucide-react'
import Link from 'next/link'

const menu = [
	{ icon: <Search width={30} height={30} />, link: '/search' },
	{ icon: <Home width={30} height={30} />, link: '/' },
	,
]
export const Menu1 = ({ pathname }: { pathname: string }) => {
	return (
		<ul className='flex h-[170px] items-center flex-col gap-4 mt-4'>
			{menu.map((item, index) => (
				<Link key={index} href={`${item?.link}`}>
					<li
						key={index}
						style={
							pathname === item?.link
								? { color: '#7af5b6b1' }
								: { color: '#cfcfcf' }
						}
						className={`flex ${
							pathname === item?.link &&
							'text-[#7af5b6b1] hover:scale-100  '
						} cursor-pointer hover:text-[#7af5b6b1]  hover:scale-[1.17] rounded-xl items-center px-2 py-2  transition duration-100 gap-4 text-[20px] text-[#cfcfcf] font-medium`}>
						<span className=' '>{item?.icon}</span>
					</li>
				</Link>
			))}
		</ul>
	)
}
