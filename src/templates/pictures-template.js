import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../css/storys.module.css"
import ReactMarkdown from "react-markdown";
import Seo from "../components/Seo";

const Story = ({data: {story: {cim, szoveg: {szoveg} }}} ) => {
    return (
        <Layout>
            <Seo
                noIndex
                lang={"hu"}
                title={"Történetek"}
                description={"A Tücsök lovasudvar történetei."}
                keywords={"tucsok, tücsök, lovarda, lovasudvar, tortenetek, történetek, képek, kepek"}
                url={"/Pictures/{cim}"}
            />
            <div >
                <h1 className={styles.h1}>{cim}</h1>
                <ReactMarkdown source={szoveg} className={styles.p}/>
                <div className={styles.backButtonDiv}>
                    <Link to="/Pictures" className={styles.backButton}>Vissza a képekhez</Link>
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  
query GetSingleTortenetek($slug: String) {
    story: contentfulTortenetek(slug: {eq: $slug}){
    cim
    id
    slug
    szoveg{
      szoveg
    }    
  }
}
  
`

export default Story