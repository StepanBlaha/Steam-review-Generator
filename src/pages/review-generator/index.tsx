
import styles from "./index.module.css"
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';


export default function ReviewGenerator(){

    const [formattedReview, setFormattedReview] = useState('');


    return(
        <>
        <div className={styles.reviewGenerator}>

            <div className={styles.reviewGeneratorCenter}>
                <div className={styles.reviewGeneratorText}>

                    <div className={styles.title}>Steam review generator</div>
                    <div className= {styles.description}>
                        <p>
                            Easy to use generator that simplifies creation of Steam reviews. Simply check the option for each category and generate
                        </p>
                        <p>
                            Made by Stepan Blaha
                        </p>
                        <p>
                            Full code available on github -{'>'} <a href=''>sdf</a>
                        </p>
                    </div>

                </div>
                <div className={styles.reviewForm}>
                    <FormBlock setData={(val: string) => setFormattedReview(val)}/>
                </div>
                <div className={styles.reviewResponse}>
                    <div className={styles.reviewResponseHeader}>
                        <div className={styles.reviewResponseTitle}>
                            <p>Review</p>
                        </div>
                        <div className={styles.reviewResponseButton}>
                            <div className={styles.copyButton} >
                            <Clipboard onClick={()=>copy(formattedReview)}/>
                            </div>
                        </div>
                    </div>
                {formattedReview ? <pre>{formattedReview}</pre> : null}
                </div>
            </div>
        </div>
        </>
    )
}