import styles from './Header.module.scss'
import {NavLink} from "react-router-dom";
import {Images} from "../images.js";

export default function Header() {

  return (
      <header>
          <div className={styles.header_block}>
              <NavLink to='/'><img src={Images.Logo} alt=""/></NavLink>
              <nav>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/AboutUs'>About Us</NavLink>
                  <NavLink to='/Properties'>Properties</NavLink>
              </nav>
              <button>Contact Us</button>
          </div>
      </header>
  )
}