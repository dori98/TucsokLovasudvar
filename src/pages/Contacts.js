import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import  * as styles from "../css/contacts.module.css"
import  * as style from "../css/prices.module.css"
import Seo from "../components/Seo";
const Contacts = () => {
    return(
        <Layout>
            <Seo
                lang={"hu"}
                title={"Elérhetőség"}
                description={"A Tücsök lovasudvar elérhetősége."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, elerhetoseg, email, Bodmer , Bodmér"}
                url={"/Contacts"}
            />
            <div className={styles.contactContainer}>
                <div className={styles.contactDiv}>
                    <h1>Kapcsolatok</h1>
                    <p>
                        <span className={styles.span}>Edző:</span> Benedek Rita <br/>
                        <span className={styles.span}>Telefonszám:</span> +36 30 242 8536 <br/>
                        <span className={styles.span}>Email: </span> tucsoklovasudvar@gmail.com <br/>
                        <span className={styles.span}>Cím: </span>
                        <a className={styles.cim} href={"https://www.google.hu/maps/place/T%C3%BCcs%C3%B6k+Lovasudvar/@47.4496877,18.5421168,17z/data=!3m1!4b1!4m5!3m4!1s0x476a13e76e5c3bab:0x1e9d65c357e06622!8m2!3d47.4496841!4d18.5443055"}>
                            Bodmér, Vasvári Pál utca 3
                        </a>
                    </p>
                    <h2>Lovaglás csak előre egyeztetett időpontban lehetséges!<br/>
                        Ha nem jártál még nálunk az alábbi gombra kattintva tudsz bejelentkezni hozzánk.
                    </h2>
                    <div className={style.button}>
                        <Link to={'/Form'}> Jelentkezés lovaglásra</Link>
                    </div>
                </div>

                 <iframe title={"video"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145100.36981746941!2d18.470634363809403!3d47.48675002292709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a13e76e5c3bab%3A0x1e9d65c357e06622!2zVMO8Y3PDtmsgTG92YXN1ZHZhcg!5e0!3m2!1shu!2shu!4v1621865659370!5m2!1shu!2shu"
                        allowFullScreen=""
                        loading="lazy"
                        className={styles.bigmap}>
                 </iframe>

            </div>
        </Layout>
    )
}
export default Contacts