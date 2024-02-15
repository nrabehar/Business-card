import clsx from "clsx"
import css from './UserPhoto.module.css'

interface IUserPhoto extends React.ComponentProps<'img'> {}

export const UserPhoto = ({className,...props}: IUserPhoto) => {
  return (
    <div className={clsx(css.photo_container)}>
      <img className={clsx(css.user_photo, className)} {...props} />
    </div>
  )
}
