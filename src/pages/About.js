import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import Rita from "../assets/lovarda_uj.jpeg"
import Rita2 from "../assets/Rita3.jpg"
import Rita3 from "../assets/Rita2.jpg"


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

            <div>
                {rolunk.map(r => {
                    return (
                        <div key={r.id} className={styles.gridContact}>
                            <h1 className={`${styles.fullwidth} ${styles.h1}`}>Bemutatkozás</h1>
                            <p className={`${styles.fullwidth} ${styles.p}`}>{r.szoveg.szoveg} </p>
                            <img src={Rita} className={`${styles.col6} ${styles.indexImg}`}/>

                            <img src={Rita2} className={`${styles.col6} ${styles.indexImg}`}/>
                        </div>
                    )
                })}
            </div>

            <div>
                {bemutatkozas.map(r => {
                    return (
                        <div key={r.id} className={styles.gridContact}>
                            <h1 className={`${styles.fullwidth} ${styles.h1}`}>Edzőnk</h1>
                            <p className={`${styles.fullwidth} ${styles.p}`}>{r.szoveg.szoveg}</p>

                            <img src={Rita3} className={`${styles.fullwidth} ${styles.indexImg}`}/>


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