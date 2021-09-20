import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Rita2 from "../assets/Rita3.jpg"
import Rita3 from "../assets/Rita2.jpg"
import lovarda from "../assets/lovarda_uj.jpeg"
import Seo from "../components/SEO";

import * as styles from "../css/about.module.css"

const ComponentName = ({data}) => {
    const {
        allContentfulRolunk: {
            nodes: rolunk
        },
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
                {rolunk.map(r => {
                    return (
                        <div key={r.id} className={styles.gridContact}>
                            <h1 className={`${styles.fullwidth} ${styles.h1}`}>Bemutatkozás</h1>
                            <img alt={"Rita a lovakkal"}  src={Rita2} className={`${styles.col6} ${styles.indexImg}`}/>

                            <p className={`${styles.col6} ${styles.p}`}>{r.szoveg.szoveg} </p>
                        </div>
                    )
                })}
            </div>

            <div>
                {bemutatkozas.map(r => {
                    return (
                        <div key={r.id} className={styles.gridContact}>
                            <h1 className={`${styles.fullwidth} ${styles.h1}`}>Edzőnk</h1>
                            <p className={`${styles.col6} ${styles.p}`}>{r.szoveg.szoveg}</p>
                            <img alt={"Rita "} src={Rita3} className={`${styles.col6} ${styles.indexImg}`}/>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}
export const query = graphql`
 {
    allContentfulRolunk {
      nodes {
         id
        szoveg {
          szoveg
        }
        
      }
    },
     allContentfulBemutatkozas {
    nodes {
      szoveg {
        szoveg
      }
    }
  }
  }
`

export default ComponentName