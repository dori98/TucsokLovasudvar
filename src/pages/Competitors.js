import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import  * as styles from "../css/competitors.module.css"
import  * as styles2 from "../css/coach.module.css"
import Seo from "../components/Seo";
import * as style from "../css/prices.module.css";
import Rita2 from "../assets/Rita5.2.jpg";

const Competitors = ({data}) => {
    const{
        allContentfulVersenyzok:{nodes:people},
        allContentfulBemutatkozas: {
            nodes: bemutatkozas}
    }=data

    return(
        <Layout>
            <Seo
                lang={"hu"}
                title={"Edzőnk és Versenyzőink"}
                description={"A Tücsök lovasudvar  versenyzői."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, lovasoktatás, lovasoktatas, versenyzők, versenyzok, verseny, díjlovaglás, dijlovaglas, díjugratás, dijugratas "}
                url={"/Competitors"}
            />
            <div>
                {bemutatkozas.map(r => {
                    return (
                        <div key={r.id} className={styles2.gridContact}>
                            <h1 className={`${styles2.fullwidth} ${styles2.h1}`}>Edzőnk</h1>
                            <img alt={"Rita a lovakkal"}  src={Rita2} className={`${styles2.col4} ${styles2.indexImg}`}/>
                            <p className={`${styles2.col8} ${styles2.p}`}>{r.szoveg.szoveg} </p>
                        </div>
                    )
                })}
            </div>
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
 allContentfulBemutatkozas {
    nodes {
      id
      szoveg {
        szoveg
      }
    }
  },
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
