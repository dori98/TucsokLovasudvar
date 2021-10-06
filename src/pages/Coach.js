import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import Rita2 from "../assets/Rita5.2.jpg"
import Rita1 from "../assets/Rita6.jpg"
import Seo from "../components/Seo";

import * as styles from "../css/coach.module.css"
import * as style from "../css/prices.module.css";

const Coach = ({data}) => {
    const {

        allContentfulBemutatkozas: {
            nodes: bemutatkozas
        }
    } = data

    return (
        <Layout>
            <Seo
                lang={"hu"}
                title={"Bemutatkozás"}
                description={"A Tücsök lovasudvar bemutatkozó oldala."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, bemutatkozas"}
                url={"/About"}
            />
            <div>
                {bemutatkozas.map(r => {
                    return (
                        <div key={r.id} className={styles.gridContact}>
                            <h1 className={`${styles.fullwidth} ${styles.h1}`}>Edzőnk</h1>
                            <img alt={"Rita a lovakkal"}  src={Rita2} className={`${styles.col4} ${styles.indexImg}`}/>
                            <p className={`${styles.col8} ${styles.p}`}>{r.szoveg.szoveg} </p>
                        </div>
                    )
                })}
            </div>

        </Layout>
    )
}
/*                            <img alt={"lovardal"}  src={Rita1} className={`${styles.col4} ${styles.indexImg}`}/>
*/
export const query = graphql`
 {
    
     allContentfulBemutatkozas {
    nodes {
      szoveg {
        szoveg
      }
    }
  }
  }
`

export default Coach