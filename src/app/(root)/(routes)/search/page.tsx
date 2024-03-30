import { SearchProvader } from '@/provaders/SearchProvader'
import { Metadata } from 'next'

  export const metadata:Metadata = {
    title: 'Найти Трек, исполнителя'
  }

const page = () => {
	return <SearchProvader />
}

export default page
