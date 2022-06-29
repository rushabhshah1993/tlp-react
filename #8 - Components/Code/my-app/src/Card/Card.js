import React from 'react';

import styles from './Card.scss';

import Header from './../Header/Header';
import CardBody from '../CardBody/CardBody';
import CardFooter from '../CardFooter/CardFooter';

const Card = props => {
    return (
        <div className={styles.cardContainer}>
            <Header img={props.img} />
            <CardBody title={props.title} content={props.content} />
            <CardFooter />
        </div>
    )
}

export default Card;
