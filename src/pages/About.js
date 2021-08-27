import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
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

                <div className={styles.indexPage}>
                    <div className={styles.card}>
                        <h1 className={styles.h1}>Bemutatkozás</h1>
                        {rolunk.map(r => {
                            return (
                                <div key={r.id} className={styles.indexContainerRight}>
                                    <Image fluid={r.fenykep.fluid} className={styles.indexImg}/>
                                    <p className={styles.p}>{r.szoveg.szoveg}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className={styles.indexPage}>
                    <div className={styles.card}>
                        <h1 className={styles.h1}>Edzőnk</h1>
                        {bemutatkozas.map(r => {
                            return (
                                <div key={r.id} className={styles.indexContainerLeft}>
                                    <p className={styles.p}>{r.szoveg.szoveg}</p>
                                </div>
                            )
                        })}
                    </div>

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
         fenykep {
            fluid {
               ...GatsbyContentfulFluid
            }
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