
import { useState } from "react";
import styles from "./index.module.css"
import Button from "../../../../components/Button";
import Input from "../Input";

interface ReviewPartProps {
    title: string;
    name:string;
    optionList: string[];
    selected: string | undefined; 
    onSelectionChange: (name: string, selectedOption: string) => void; 
    hidden: boolean;
    onHide: (name: string, value: boolean) => void; 
  }

export default function Form({name, title ,optionList, onSelectionChange, selected, hidden, onHide}: ReviewPartProps) {
    // Hndle changed clicked radio button
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        onSelectionChange(name, event.target.value)
    } 

    // Handle form visibility
    const handleVisibility = () => {
        onHide(name, !hidden)
    }

    // Load the radio buttons
    const RadioList = optionList.map(option =>
        <Input key={option} name={name} value={option} label={option} checked={selected===option} onChange={handleChange}/>
    )
    return(
        <>
        <span className={styles.reviewFormTitle}>{title}</span>
        <form className={hidden ?  `${styles.reviewForm} ${styles.hiddenForm}`: `${styles.reviewForm}`}>
            {RadioList}
        </form>
        <Button onClick={handleVisibility} className={hidden ? `${styles.visibilityButton} ${styles.hiddenButton}`: `${styles.visibilityButton}`}>Visibility</Button>
        </>
    )
}