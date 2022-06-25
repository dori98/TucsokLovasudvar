import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import * as styles from "../css/blog.module.css"
import Seo from "../components/Seo";

const Blog = ({data}) => {
    const {
        allContentfulHirek: {nodes: blogs},
        contentfulLogo: {logo: {fluid}}
    } = data
    return (
        <Layout>
            <Seo
                lang={"hu"}
                title={"Hírek"}
                description={"A Tücsök lovasudvar hírei."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, ló, lo, Benedek Rita, lovasoktatás, lovasoktatas, hirek, hírek"}
                url={"/Blog"}
            />
            <h1 className={styles.title}>Hírek</h1>

            <div className={styles.page}>
                {blogs.map(blog => {
                    return (
                        <div key={blog.id} className={styles.card}>
                            {
                                blog.fenykep && (
                                    <Image fluid={blog.fenykep.fluid} className={styles.cardImage}/>
                                )
                            }
                            {
                                !blog.fenykep && (
                                    <Image fluid={fluid} className={styles.cardImg}/>
                                )
                            }
                            <div className={styles.cardDiv}>
                                <h1>{blog.cim} <span className={styles.cardDate}><br/>{blog.datum}</span></h1>
                            </div>
                            <div className={styles.markdown}><ReactMarkdown source={blog.szoveg.szoveg}/></div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulHirek(sort: {order: DESC, fields: datum}){
      nodes {
        id
        datum(formatString: "YYYY MM. D.")
        cim
        szoveg{
            szoveg
        } 
        fenykep {
          fluid {
              ...GatsbyContentfulFluid

          }
        }
      }
    }
     contentfulLogo {
      logo {
        fluid {
          ...GatsbyContentfulFluid

        }
      }
    }
  }
`
export default Blog


