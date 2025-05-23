
import styles from "./index.module.css";
import React, { use, useEffect, useState } from 'react';

import Form from "./components/Form";
import FormGroup from "./components/FormGroup";
import { copy } from "../../utils/copyReview"
import { Clipboard } from 'lucide-react';

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
                            Easy to use generator that simplifies creation of Steam reviews. Simply check the option for each category and generate!
                        </p>
                        <p>
                            Made by Stepan Blaha
                        </p>
                        <p>
                            Full code available on github -{'>'} <a href='https://github.com/StepanBlaha/Steam-review-Generator'>Click Here!</a>
                        </p>
                    </div>
                    {/* 
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.steamLogo}>
                        <g className={styles.dash}>
                            <path   pathLength="360" d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z" className={styles.big}></path>
                            <path pathLength="360" d="M 20.4603 48.5493 L 16.6461 46.9584 C 17.3209 48.3794 18.4917 49.5682 20.0447 50.2206 C 23.4007 51.6328 27.2707 50.0262 28.6694 46.6367 C 29.3464 44.9966 29.3509 43.1867 28.6806 41.5422 C 28.0103 39.8977 26.7434 38.6151 25.119 37.9315 C 23.5035 37.2544 21.7741 37.279 20.2547 37.8576 L 24.1961 39.5022 C 26.6719 40.5434 27.8427 43.4124 26.8104 45.9105 C 25.7803 48.4085 22.936 49.5905 20.4603 48.5493 Z" className={styles.aaa}></path>
                            <path pathLength="360" d="M 49.9968 24.2603 C 49.9968 19.9188 46.4954 16.384 42.1943 16.384 C 37.8908 16.384 34.3894 19.9188 34.3894 24.2603 C 34.3894 28.6017 37.8908 32.1343 42.1943 32.1343 C 46.4954 32.1343 49.9968 28.6017 49.9968 24.2603 Z"></path>
                            <path pathLength="360" d="M 36.3446 24.2469 C 36.3446 20.9802 38.97 18.3324 42.2054 18.3324 C 45.4431 18.3324 48.0685 20.9802 48.0685 24.2469 C 48.0685 27.5135 45.4431 30.1613 42.2054 30.1613 C 38.97 30.1613 36.3446 27.5135 36.3446 24.2469 Z"></path>
                        </g>
                        <path pathLength="360" d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z" fill="#212121"></path>
                        <path className={styles.fill} pathLength="360" d="M 31.9463 1 C 15.6331 1 2.2692 13.6936 1 29.8237 L 17.644 36.7682 C 19.0539 35.794 20.7587 35.2264 22.5909 35.2264 C 22.7563 35.2264 22.9194 35.231 23.0803 35.2399 L 30.4828 24.412 L 30.4828 24.2601 C 30.4828 17.7446 35.7359 12.4423 42.1933 12.4423 C 48.6507 12.4423 53.9038 17.7446 53.9038 24.2601 C 53.9038 30.7756 48.6507 36.08 42.1933 36.08 C 42.104 36.08 42.0168 36.0778 41.9275 36.0755 L 31.3699 43.6747 C 31.3766 43.8155 31.3811 43.9562 31.3811 44.0947 C 31.3811 48.9881 27.4374 52.9675 22.5909 52.9675 C 18.3367 52.9675 14.7773 49.902 13.9729 45.8443 L 2.068 40.8772 C 5.7548 54.0311 17.7312 63.6748 31.9463 63.6748 C 49.0976 63.6748 63 49.6428 63 32.3374 C 63 15.0297 49.0976 1 31.9463 1 Z"></path>
                    </svg>
                    */}
                </div>
                <div className={styles.reviewForm}>
                    <FormGroup setData={(val: string) => setFormattedReview(val)}/>
                </div>
                <div className={styles.reviewResponse}>
                    <div className={styles.reviewResponseHeader}>
                        <div className={styles.reviewResponseTitle}>
                            <p>Review</p>
                        </div>
                        <div className={styles.reviewResponseButton}>
                            <div className={styles.copyButton} >
                            <Clipboard onClick={()=>copy(formattedReview)}/>
                                <div className={styles.tooltip}>Copy</div>
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