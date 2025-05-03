import { useState } from "react"
import styles from "./index.module.css" 
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
  }
export default function Input({ label, ...props}: InputProps){
    const [checked, setChecked] = useState(false)

    return(
        <>

        <div className={styles.radioWrapper}>
            <label className={styles.radioButton}>
            <input {...props}  type="radio"/>
            <span className={styles.radioCheckmark}></span>
            {label ?  <span className={styles.radioLabel}>{label}</span>: null}
            </label>
        </div>
        </>
    )
}