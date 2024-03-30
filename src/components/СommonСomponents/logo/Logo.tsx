import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

export const Logo = memo(() => {
	return (
		<Link href={'/'}>
			<div
				style={{ border: '1px solid #8585853c' }}
				className=' bg-[#242424] justify-center pr-3 w-[120px] flex  mb-3 py-5 rounded-2xl gap-2 px-1 relative '>
				<Image
					priority
					src={'/applitools-icon.svg'}
					alt='logo'
					width={35}
					height={35}
				/>
				{/*      <span className="text-[#838383] font-medium text-sm right-[7px] bottom-[-6px] absolute">2024</span>*/}
			</div>
		</Link>
	)
})
