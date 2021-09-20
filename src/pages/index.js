import React from "react"
import {graphql, Link} from "gatsby";
import Image from "gatsby-image"
import * as styles from "../css/index.module.css"
import Seo from "../components/Seo";

const index = ({data}) => {
    const {
        galeria: {nodes: galeria},
        ponyklub: {nodes: ponyklub},
        hirek: {nodes: hirek},
        versenyzok: {nodes: versenyzok},
        kapcsolat: {nodes: kapcsolat},
        arak: {nodes: arak},
        allataink: {nodes: allataink},
        rolunk: {nodes: rolunk},
    } = data

    return (
        <div className={styles.indexFullpage}>
            <Seo
                lang={"hu"}
                title={"Kezdőlap"}
                description={"A Tücsök lovasudvar kezdőlap."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, lovaglas, lovaglás, arak, árak, képek, kepek, bemutatkozas, bemutatkozás"}
                url={"/"}
            />
            <div className={styles.indexPage}>
                    <Link to='/About' className={`${styles.item1} ${styles.indexImg}`}><Image fluid={rolunk[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                <div className={`${styles.item2} ${styles.indexImg}`}>
                    <Link to='/Prices'><Image fluid={arak[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={`${styles.item3} ${styles.indexImg}`}>
                    <Link to='/PonyClub'><Image fluid={ponyklub[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={`${styles.item4} ${styles.indexImg}`}>
                    <Link to='/Competitors'><Image fluid={versenyzok[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={styles.item5}>
                    <h1>Tücsök</h1>
                    <h1>Lovasudvar</h1>
                </div>
                <div className={`${styles.item6} ${styles.indexImg}`}>
                    <Link to='/Horses'><Image fluid={allataink[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={`${styles.item7} ${styles.indexImg}`}>
                    <Link to='/Pictures'><Image fluid={galeria[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={`${styles.item8} ${styles.indexImg}`}>
                    <Link to='/Blog'><Image fluid={hirek[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
                <div className={`${styles.item9} ${styles.indexImg}`}>
                    <Link to='/Contacts'><Image fluid={kapcsolat[0].tabla.fluid} className={styles.indexImg__box}/></Link>
                </div>
            </div>
        </div>
    )
}
export const query = graphql`
  {
    galeria:allContentfulTablak(filter: {nev: {eq: "galeria"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    ponyklub:allContentfulTablak(filter: {nev: {eq: "ponyklub"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    hirek:allContentfulTablak(filter: {nev: {eq: "hirek"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    versenyzok:allContentfulTablak(filter: {nev: {eq: "versenyzok"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    kapcsolat:allContentfulTablak(filter: {nev: {eq: "kapcsolat"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    arak:allContentfulTablak(filter: {nev: {eq: "arak"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    allataink:allContentfulTablak(filter: {nev: {eq: "allataink"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    rolunk:allContentfulTablak(filter: {nev: {eq: "rolunk"}}) {
      nodes {
        nev
        tabla {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default index