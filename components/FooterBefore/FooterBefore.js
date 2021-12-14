import React from 'react'
import styles from "./footer-before.module.scss";
const FooterBefore = ({image}) => {
    return (
        <div style={{backgroundImage:`url(${image})`}} className={styles.footer_before_container} >
            
        </div>
    )
}

export default FooterBefore
