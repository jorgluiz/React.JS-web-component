import { Link } from "react-router-dom"
import { SideBar } from "./utils/sidebardata"

import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="menu-nav">
            <ul className="menu-ul">
                {SideBar.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link className="link" to={item.path}>
                                {item.icon}
                                <span className="span">{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar