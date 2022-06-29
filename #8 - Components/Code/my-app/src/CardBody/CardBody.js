import React from 'react';

import styles from './CardBody.scss';

const CardBody = props => {
    return (
        <div className={styles.body}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.content}>{props.content}</p>
        </div>
    )
}

export default CardBody;