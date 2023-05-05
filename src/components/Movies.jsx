import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = ( { data } ) => {

    const { Title, Poster, Year } = data;

    return (
        <Link to={`/${Title}/${Year}`}>
        <div className={styles.container}>
            <img src={Poster} alt='film' />
            <div className={styles.title}>
                <p>{Title} {Year}</p>
            </div>
        </div>
        </Link>
    );
};

export default Movies;