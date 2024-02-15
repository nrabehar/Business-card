import clsx from 'clsx'
import css from './UserInfo.module.css'

interface IUserInfo extends React.ComponentProps<'div'> {
  fname: string,
  lname: string,
  title: string,
  location: string,
  description: string,
  technologies: string[]
}

export const UserInfo = ({
  fname,lname,title,location,description,technologies,className, ...props
}: IUserInfo) => {
  return (
    <div className={clsx(css.info_container, className)} {...props}>
      <h1 className={clsx(css.name)}>
        <span className={clsx(css.fname)}>{fname.toUpperCase()}</span>
        <span className={clsx(css.lname)}>{lname.toUpperCase()}</span>
      </h1>
      <span className={clsx(css.title)}>{title} · {location}</span>
      <p>{description}</p>
      <span className={clsx(css.title)}>Working with technologies : </span>
      <ul className={clsx(css.technologies)}>
        {technologies.map(tech => (
          <li key={tech} className={clsx(css.tech)}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export type {IUserInfo}
