import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../css/ponyKlub.module.css"
import * as style from "../css/prices.module.css"
import Image from "gatsby-image";
import Seo from "../components/Seo";

const PonyKlub = ({data}) => {
   const {
       allContentfulPonyClub: {
         nodes: pony
      },
   } = data

   return (
       <Layout>
           <Seo
               lang={"hu"}
               title={"Póni klub"}
               description={"A Tücsök lovasudvar póni klubb oldala."}
               keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, poni, pony, klub, versenyzok, versenyzők, verseny"}
               url={"/PonyClub"}
           />
          <section className={styles.page}>
              <h1 className={styles.h1}>Tücsök Póni Klub</h1>
              {pony.map(r => {
                  return(
                      <div key={r.id} >
                          <p className={styles.p}>{r.szoveg.szoveg}</p>
                      </div>
                  )
              })}

              <div >
                  {
                      pony.map(x=>{
                          return(
                              <div key={x.id}>
                                  <div className={styles.galeryPage}>
                                      {
                                          x.kepek.map(y=>{
                                              return(
                                                  <div key={y.id} >
                                                      <Image fluid={y.fluid} className={`${styles.galeryPhotosize} ${"image-for-modal"}`}/>
                                                  </div>
                                              )
                                          })
                                      }
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
              <div className={style.button}>
                  <Link to={'/Competitors'}> Versenyzőink</Link>
              </div>

          </section>
       </Layout>
   )
}
export const query = graphql`
 {
    allContentfulPonyClub {
    nodes {

      szoveg {
        szoveg
      }
      kepek{
        id
            fluid {
                ...GatsbyContentfulFluid
            }
      }
      id
    }
  }
  }
`

export default PonyKlub