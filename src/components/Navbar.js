import React, {useState} from 'react'
import {Link} from 'gatsby'
import {FaTimes} from "react-icons/fa"
import logo from "../assets/logo2.png"
import {AiOutlineMenu} from "react-icons/all";
import * as styles from "./Navbar.module.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    const toLink = () => {
        setIsOpen(false)
    }
    return (
        <nav className={styles.navbarNav}>
            <div className={styles.navbarContainer}>
                <Link to={"/"}>
                    <img src={logo} alt="logo" className={styles.navbarImg}/>
                </Link>
                <div className={styles.navbarTitle}>
                    <h1>Tücsök Lovasudvar</h1>
                </div>
                <div className={styles.buttonEH}>
                    {/*<button>EN</button>| <button>HU</button>*/}
                </div>
                <div className={styles.navbarDivs}>
                    <button className={styles.menuButton} onClick={() => toggleSidebar()}>
                        <AiOutlineMenu className={styles.menu}/>
                    </button>
                    <div className={!isOpen ? `${styles.dropdownContent}` : `${styles.dropdownContent} ${styles.openMenu}`}>
                        <button onClick={() => toggleSidebar()} className={styles.closeButton}>
                            <FaTimes/>
                        </button>
                        <Link to='/' onClick={() => toLink()}>Főoldal</Link>
                        <Link to='/About' onClick={() => toLink()}>Rólunk</Link>
                        <Link to='/PonyClub' onClick={() => toLink()}>Tücsök Póni Klub</Link>
                        <Link to='/Competitors' onClick={() => toLink()}>Edzőnk és versenyzőink</Link>
                        <Link to='/Horses' onClick={() => toLink()}>Állataink</Link>
                        <Link to='/Pictures' onClick={() => toLink()}>Képek és történetek</Link>
                        <Link to='/Prices' onClick={() => toLink()}>Árak</Link>
                        <Link to='/Blog' onClick={() => toLink()}>Hírek</Link>
                        <Link to='/Contacts' onClick={() => toLink()}>Kapcsolat</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
