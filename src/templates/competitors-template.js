import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import * as styles from "../css/competitors.module.css"

const Competitor = ({data: {competitor: {nev, szoveg: {szoveg}, fenykep: {fluid}}}}) => {
    return (
        <Layout>
            <div className={styles.singleCompetitorPage}>
                <div style={{textAlign: "center"}} className={styles.singleCompetitorTitle}>
                    <h1>{nev}</h1>
                </div>
                <div className={styles.singleCompetitor}>
                    <article  >
                        <Image fluid={fluid} className={styles.singleCompetitorImage}/>
                    </article>
                    <article  className={styles.singleCompetitorTextblock}>
                        <p>{szoveg}</p>
                        <div className={styles.backButtonDiv}>
                            <Link to="/Competitors" className={styles.backButton}>Vissza a versenyzőkhöz</Link>
                        </div>
                    </article>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  
    query GetSingleCompetitor($slug: String) {
    competitor: contentfulVersenyzok(slug: {eq: $slug}){
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
export default Competitor

/*  <Layout>
            <div className={styles.singleCompetitorPage}>
                <div style={{textAlign: "center"}} className={styles.singleCompetitorTitle}>
                    <h1>{nev}</h1>
                </div>
                <div className={styles.singleCompetitor}>
                    <article>
                        <Image fluid={fluid} className={styles.singleCompetitorImage}/>
                    </article>
                    <article>
                        <p>{szoveg}</p>
                        <div className={styles.backButtonDiv}>
                            <Link to="/Competitors" className={styles.backButton}>Vissza a versenyzőkhöz</Link>
                        </div>
                    </article>
                </div>
            </div>
        </Layout>*/