import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import * as styles from "../css/competitors.module.css"
import Seo from "../components/Seo";

const Horse = ({data: {animal: {nev, szoveg: {szoveg}, fenykep: {fluid}}}}) => {
    return (
        <Layout>
            <Seo
                noIndex
                lang={"hu"}
                title={"Állataink"}
                description={"A Tücsök lovasudvarban található állatok."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, macska, kutya, állat, allat"}
                url={"/Horses/{nev}"}
            />
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