import styles from './swatches.module.scss';

const Swatches = ({ 
    changeHandler,
    data 
}) => {
    return <ul className={styles.swatch__list}>
        {data.map((item) => {
            return <li 
                className={styles.swatch__item}
                style={{ backgroundColor: item }}
                onClick={() => {
                    changeHandler(item);
                }}
            >
                {item}
            </li>
        })}
    </ul>
}
export default Swatches;