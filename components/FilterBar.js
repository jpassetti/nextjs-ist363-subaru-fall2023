
import classNames from 'classnames/bind';

import styles from './filterbar.module.scss';

const cx = classNames.bind(styles);

const FilterBar = ({ items, activeItem, setActiveItem }) => {
    return <div className={styles.filterBar}>
        <ul className={styles.filterBarList}>
            {items.map((item, index) => {
                const { name, slug } = item.node;
                const buttonClasses = cx({
                    filterBarListItemButton : true,
                    active : activeItem === slug
                });
                return <li key={index} className={styles.filterBarListItem}>
                    <button 
                        className={buttonClasses}
                        onClick={() => {
                            setActiveItem(slug);
                        }}
                    >
                        {name}
                    </button>
                </li>
            })}
        </ul>
    </div>
}
export default FilterBar;