import { Link, useLocation } from 'react-router-dom'

type navItemProps = {
    to: string,
    className: string,
    title: string
}
export default function NavItem({ to, className, title }: navItemProps) {
    const router = useLocation()
    console.log(router.pathname);
    
  return (
      <>
          <Link to={to} className={` ${className} ${router.pathname == to ? 'text-white' : ''}`}>{title}</Link>
      </>
  )
}
