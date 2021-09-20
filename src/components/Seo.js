import React from "react"
import {Helmet} from "react-helmet"
import favicon from "/src/assets/logo3.png"
import defaultImage from "/src/assets/SeoImage.png"

const Seo = ({lang, title, description, keywords, image, url, isBlogPost, noIndex}) => {

    const defaultUrl = "https://tucsok.netlify.app" ;

    return (
        <Helmet htmlAttributes={{lang: lang}}>
            {/* General tagek, az alap seóhoz */}
            <title>{title}</title>
            {description && <meta name="description" content={description}/>}
            {keywords && <meta name="keywords" content={keywords}/>}
            <link rel="canonical" href={defaultUrl + url}/>
            <link rel="icon" href={favicon} sizes="any" type="image/svg+xml"/>
            {/* Ha nem kell googleban indexelni */}
            {noIndex && <meta name="robots" content="noindex" />}
            {/* OpenGraph tagek, a social mediához */}
            <meta property="og:title" content={title}/>
            <meta property="og:url" content={defaultUrl + url}/>
            {image ? <meta property="og:image" content={defaultUrl + image}/> : <meta property="og:image" content={defaultUrl + defaultImage}/>}
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            {isBlogPost ? <meta property="og:type" content="article"/> : <meta property="og:type" content="website"/>}
            {description && <meta property="og:description" content={description}/>}
            <meta property="og:locale" content={lang}/>
        </Helmet>
    )
}

export default Seo