import { Link, LinkProps, useLocation } from 'react-router-dom'

interface NavLinkProps extends LinkProps {}

export default function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="gap-1/5 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
