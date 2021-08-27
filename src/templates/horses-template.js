import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import * as styles from "../css/competitors.module.css"

const Horse = ({data: {animal: {nev, szoveg: {szoveg}, fenykep: {fluid}}}}) => {
    return (
        <Layout>
            <div className={styles.singleCompetitorPage}>
                <div style={{textAlign: "center"}} className={styles.singleCompetitorTitle}>
                    <h1>{nev}</h1>
                </div>
                <div className={styles.singleCompetitor}>
                    <article>
                        <Image fluid={fluid} className={styles.singleCompetitorImage}/>
                    </article>
                    <article className={styles.singleCompetitorTextblock}>
                        <p>{szoveg}</p>
                        <div className={styles.backButtonDiv}>
                            <Link to="/Horses" className={styles.backButton}>Vissza</Link>
                        </div>
                    </article>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  
    query GetSingleAnimal($slug: String) {
    animal: contentfulAllataink(slug: {eq: $slug}){
    nev
    id
    slug
    szoveg{
      szoveg
    }
    fenykep{
        fluid{
          ...GatsbyContentfulFluid
        }
    }
  }
}
  
`
export default Horse