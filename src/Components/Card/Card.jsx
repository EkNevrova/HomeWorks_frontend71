import styles from "./Card.module.scss"
import { useState } from "react"

export default function Card(props) {
    const [selected, setChecked] = useState(true);
      
    return (   
        <div className={styles.cardContainer} onClick={() => setChecked(!selected)}>                      
            <div className={styles[props.color]}>
            <div className={selected ? styles.tittle : styles.tittleSelected}>Безлимитный {props.price}</div>
                <div className={styles.body}>
                    <span className={styles.currency}>руб </span>
                    <span className={styles.price}>{props.price}</span>
                    <span className={styles.period}> /мес</span>
                </div>
            </div>    
            <div className={styles.speed}>до {props.speed} Мбит/сек</div>
            <div className={styles.info}>Объем включенного<br/>
            трафика не ограничен</div>
        </div>
    );
}

