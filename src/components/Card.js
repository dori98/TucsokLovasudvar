import React from "react";
import Image from "gatsby-image";
import * as styles from "./Card.module.css";

const Card = ({title, img, description}) => {

    return(
        <div className={`${styles.card}`}>
            <Image fluid={img} className={styles.cardImage}/>
            <h1>{title}</h1>

        </div>
    )
}
export default Card