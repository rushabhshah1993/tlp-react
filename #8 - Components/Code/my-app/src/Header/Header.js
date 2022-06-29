import React from 'react';

import styles from './Header.scss';

const Header = props => {
    return (
        <div className={styles.header}>
            <img src={props.img} className={styles.img} />
        </div>
    )
};

export default Header;
