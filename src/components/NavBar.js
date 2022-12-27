import "./NavBar.css"
import CartWidget from "./CartWidget"
import logo from "../imgs/xili-logo.png"

export default function NavBar() {
  return(
    <nav className="nav_container">
      <img src={logo}/>
      <button>Home</button>
      <button>Productos</button>
      <button>Contacto</button>
      <CartWidget />
    </nav>
  )
}