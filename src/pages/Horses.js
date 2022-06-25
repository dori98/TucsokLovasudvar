import React from "react"
import Layout from "../components/Layout";
import {graphql, Link} from "gatsby"

import Image from "gatsby-image";
import  * as styles from "../css/competitors.module.css"
import Seo from "../components/Seo";


const Horses = ({data}) => {
    const {
        horses: {nodes: horses},
        dogCat: {nodes: dc}
    } = data
    return (

        <Layout>
            <Seo
                lang={"hu"}
                title={"Állataink"}
                description={"A Tücsök lovasudvarban található állatok."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, macska, kutya, állat, allat"}
                url={"/Horses"}
            />
            <div className={styles.competitorCompetitors}>
                <h1>Lovaink</h1>
            </div>
            <div className={styles.competitorPage}>
                {horses.map(animal => {
                    return(
                        <div key={animal.id} className={styles.competitorBlock}>
                            <Link to={`/Horses/${animal.slug}`} className={styles.competitorsLink}>
                                <Image fluid={animal.fenykep.fluid} className={styles.competitorImage}/>
                                <h1>{animal.nev}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className={styles.competitorCompetitors}>
                <h1>Kutyáink és macskáink </h1>
                <p > A házörző és rágcsálóírtó részleg</p>
            </div>
            <div className={styles.competitorPage}>
                {dc.map(animal => {
                    return(
                        <div key={animal.id} className={styles.competitorBlock}>
                            <Link to={`/Horses/${animal.slug}`} className={styles.competitorsLink}>
                                <Image fluid={animal.fenykep.fluid} className={styles.competitorImage}/>
                                <h1>{animal.nev}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}
export const query = graphql`
  {
    horses:allContentfulAllataink (filter: {lo: {eq: true}} sort: {order: ASC, fields: sorszam}) {
      nodes {
        id
        nev
        slug
        szoveg {
          szoveg
        }
        fenykep {
          fluid {
             ...GatsbyContentfulFluid

          }
        }
        lo
      }
    },
    dogCat:allContentfulAllataink (filter: {lo: {eq: false}} sort: {order: ASC, fields: sorszam}) {
      nodes {
        id
        nev
        slug
        szoveg {
          szoveg
        }
        fenykep {
          fluid {
             ...GatsbyContentfulFluid

          }
        }
        lo
      }
    }
  }
`
export default Horses
