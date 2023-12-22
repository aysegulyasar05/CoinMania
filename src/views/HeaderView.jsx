import { Link, NavLink } from "react-router-dom"


const HeaderView = () => {
  return (
   <header className="d-flex justify-content-between p-3 align-items-center">
    <Link className="d-flex gap-3 align-items-center">
    <img height={60} src="/logo-coin.png" alt="logo"/>
    <h3 className="text-light">Coinmania</h3>
    </Link>
    <div className="d-flex gap-3">
      {localStorage.getItem('user') ? 
        (<NavLink 
          to={'/'}
          onClick={()=>localStorage.removeItem('user')}>Logout</NavLink>
         ): (<NavLink to={'/'}>Login</NavLink>)} 
      <NavLink to={'/home'}>Anasayfa</NavLink>
    </div>
   </header>
  )
}

export default HeaderView
