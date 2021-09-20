import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import  * as styles from "../css/competitors.module.css"
import Seo from "../components/SEO";

const Competitors = ({data}) => {
    const{
        allContentfulVersenyzok:{nodes:people},
    }=data

    return(
        <Layout>
            <Seo
                lang={"hu"}
                title={"Versenyzők"}
                description={"A Tücsök lovasudvar  versenyzői."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, lovasoktatás, lovasoktatas, versenyzők, versenyzok, verseny, díjlovaglás, dijlovaglas, díjugratás, dijugratas "}
                url={"/Competitors"}
            />
            <div className={styles.competitorCompetitors}>
                <h1>Versenyzőink</h1>
                <p > Ha kíváncsi vagy mit jelent versenyzőink számára a lovaglás kattints a képükre!</p>
            </div>
            <div className={styles.competitorPage}>
                {people.map(person => {
                    return(
                        <div key={person.id} className={styles.competitorBlock}>
                            <Link to={`/Competitors/${person.slug}`} className={styles.competitorsLink}>
                                <Image fluid={person.fenykep.fluid} className={styles.competitorImage}/>
                                <h1>{person.nev}</h1>
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
    allContentfulVersenyzok (sort: {fields: nev, order: ASC}){
      nodes {
        nev
        id
        slug
        szoveg {
          szoveg
        }
        fenykep {
          fluid {
              ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default Competitors
