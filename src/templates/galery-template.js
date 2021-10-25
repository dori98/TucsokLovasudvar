import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../css/photos.module.css"
import Image from "gatsby-image";
import  * as style from "../css/competitors.module.css"
import Seo from "../components/Seo";

const Galery = ({data} ) => {
    return (
        <Layout>
            <Seo
                noIndex
                lang={"hu"}
                title={"Képek "}
                description={"A Tücsök lovasudvar képei"}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, tortenetek, történetek, képek, kepek"}
                url={"/Pictures/{data.galery.mappanev}"}
            />
            <div >
                <h1 className={styles.galeryTitle}> {data.galery.mappanev}</h1>
                <div className={styles.galeryPage}>
                    {
                        data.galery.kepek.map(x=>{
                            return(
                                <div key={x.id}>
                                    <Image fluid={x.fluid} className={`${styles.galeryPhotosize} ${"image-for-modal"}`}/>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className={style.backButtonDiv}>
                <Link to="/Pictures" className={style.backButton}>Vissza</Link>
            </div>
        </Layout>
    )
}
export const query = graphql`
  
query GetSingleFotoMappak($slug: String) {
    galery: contentfulFotoMappak(slug: {eq: $slug}) {
        kepek {
            fluid {
             ...GatsbyContentfulFluid
            }
         }
        id
        slug
        mappanev
    }
}
  
`

export default Galery
