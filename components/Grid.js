import styles from './grid.module.scss';

const Grid = ({children}) => {
    return <ul className={styles.grid}>
        {children}
    </ul>
}
export default Grid;