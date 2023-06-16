import styles from "./Global.module.css";

function Global({dataglobe}) {
    return(
        <div className={styles.container}>
            <h2 className={styles.global__title}>Global</h2>
            <h3 className={styles.global__subTitle}>
            Data Covid Berdasarkan Global
            </h3>
            <div className={styles.container_kotak}>
                {dataglobe.map((data) => {
                    return(
                        <div className={styles.kotak}>
                            <h2 className={styles.kotak_title}>{data.status}</h2>
                            <h4 style={{color: data.color}}>{data.total}</h4>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Global;