import React from 'react'
import logo from "../assets/logo.png"
import * as style from "./Footer.module.css"
import felnott from "../assets/Nyilatkozat Felnőtt új.pdf";
import gyerek from "../assets/Nyilatkozat Gyermek új.pdf";
import adatvedelem from "../assets/Adatkezelési és hozzájárulási nyilatkozat.pdf"
import * as styles from "../css/contacts.module.css";

const Footer = () => {
    return(
        <section className={style.footerPage}>
            <div className={style.footerContainer}>
                <div className={style.footerDiv}>
                    <div>
                        <h2 className={style.footerH2}>
                            Benedek Rita
                        </h2>
                        <p className={style.footerP}>
                            <span>Telefonszám:</span> +36302428536
                            <br/>
                            <span>Cím: </span>
                            <a className={styles.cim} href={"https://www.google.hu/maps/place/T%C3%BCcs%C3%B6k+Lovasudvar/@47.4496877,18.5421168,17z/data=!3m1!4b1!4m5!3m4!1s0x476a13e76e5c3bab:0x1e9d65c357e06622!8m2!3d47.4496841!4d18.5443055"}>
                            Bodmér, Vasvári Pál utca 3
                            </a>
                            <br/>
                            <span>E-mail: </span>  tucsoklovasudvar@gmail.com
                        </p>
                    </div>
                    <img src={logo} className={style.footerImg} alt={"logo"}/>
                    <div className={style.footerLink}>
                        <h2 className={style.footerH2}>
                            Letölthető nyilatkozatok
                        </h2>
                        <a href={adatvedelem} download className={style.a}>
                            Adatkezelési és hozzájárulási nyilatkozat
                        </a>
                        <br/>

                        <a href={felnott} download className={style.a} >
                            Felnőtt nyilatkozat
                        </a>
                        <br/>
                        <a href={gyerek} download className={style.a} >
                            Gyerek  nyilatkozat
                        </a>
                    </div>
                </div>
                <p className={style.footerCopyright}>Copyright 2021 © Tücsök Lovasudvar</p>
            </div>
        </section>
    )
}
export default Footer
