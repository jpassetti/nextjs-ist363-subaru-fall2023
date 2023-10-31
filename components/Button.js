import classnames from 'classnames/bind';

import styles from './button.module.scss';

let cx = classnames.bind(styles);

const Button = ({ 
    label,
    type
}) => {
    let buttonClasses = cx({
        btn : true,
        primary : type === 'primary',
        secondary : type === 'secondary'
    });
    
    return <button className={buttonClasses}>
       {label} 
    </button>
}
export default Button;