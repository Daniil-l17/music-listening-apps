import { memo } from "react"
import style from './buttonmenu.module.scss'
import { LogOut } from "lucide-react"

export const ButtomMenu = memo(({signOutModel}:{signOutModel:() => void}) => {
  return (
    <div>
      <LogOut onClick={signOutModel} className={style.btn} />
    </div>
  )
})
