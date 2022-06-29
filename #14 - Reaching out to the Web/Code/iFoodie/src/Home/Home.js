import React, { Component } from 'react';
import axios from 'axios';

import styles from './Home.scss';

import Card from './../Card/Card';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: []
        }
    }

    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
        .then(response => {
            this.setState({
                dishes: response.data.meals
            })
        })
        .catch(error => {
            console.log("error:   ", error);
        })
    }

    render() {
        let recipes = null;

        if(this.state.dishes.length > 0) {
            recipes = this.state.dishes.map(item => {
                return (
                    <Card
                        img={item.strMealThumb}
                        name={item.strMeal}
                        key={item.idMeal}
                    />
                )
            })
        }

        return (
            <div className={styles.home}>
                <div className={styles.header}>iFoodie</div>

                <div className={styles.foodContainer}>
                    <p className={styles.sectionTitle}>Recipes</p>

                    <div className={styles.recipes}>
                        { recipes }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;