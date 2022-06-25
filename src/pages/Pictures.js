import React from "react"
import Layout from "../components/Layout"
import {graphql, Link} from "gatsby"
import * as styles from "../css/photos.module.css";
import Image from "gatsby-image";
import Seo from "../components/Seo";

const Pictures = ({data}) => {
    const {
        allContentfulFotoMappak: {nodes: images},
        allContentfulTortenetek: {nodes: story}
    } = data
    return (
        <Layout>
            <Seo
                lang={"hu"}
                title={"Képek és történetek"}
                description={"A Tücsök lovasudvar képek és történetek oldala."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, tortenetek, történetek, képek, kepek"}
                url={"/Pictures"}
            />
            <div className={styles.photosFullpage}>
                <h1 className={styles.title}>Történetek</h1>
                <p className={styles.p}>Lovaink, Kutyáink mesélték...</p>
                <div className={styles.story}>
                    {story.map(s => {
                        return(
                            <div key={s.id} className={styles.storyboxDiv} >
                                <Link to={`/Pictures/${s.slug}`} className={styles.link} >
                                    <h1 className={styles.storybox}>{s.cim}</h1>
                                </Link>
                            </div>
                        )
                    })}

                </div>
                <h1 className={styles.title}>Képek</h1>
                <div className={styles.photosGalery}>
                    {images.map(s=>{
                        return(
                            <div key={s.id} >
                                <Link to={`/Galery/${s.slug}`} className={styles.link} >
                                     <Image fluid={s.mappakep.fluid} className={styles.photosMapsize}/>
                                     <h2 className={styles.photosTitle}>{s.mappanev}</h2>
                                </Link>


                            </div>
                        )
                    })
                    }
                </div>


                <h1 className={styles.title}>Videók</h1>
                <iframe src="https://www.youtube.com/embed/4-Cqrm7mPvs" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className={styles.video} title={"videó"}></iframe>

            </div>
        </Layout>
    )
}
export const query = graphql`
  {
     allContentfulFotoMappak {
      nodes {
        id
              slug

        kepek {
          fluid {
             ...GatsbyContentfulFluid
          }
          id
        }
        mappakep {
          fluid {
             ...GatsbyContentfulFluid
          }
        }
        mappanev
      }
    }
    ,
    allContentfulTortenetek {
    nodes {
      cim
      id
      slug
      szoveg {
        szoveg
      }
    }
  }
  }
`
export default Pictures
