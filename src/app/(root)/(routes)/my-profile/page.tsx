import { MyProfileProvaderPage } from "@/provaders/MyProfileProvaderPage"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'мой профиль'
}

const page = () => {
  return (
    <MyProfileProvaderPage/>
  )
}

export default page