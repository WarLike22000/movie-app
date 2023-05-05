import React, { useContext, useEffect, useState } from 'react';
import styles from './Body.module.css';
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';

//context
import { movieContext } from '../../context/MovieContextProvider.jsx';
//components
import Movies from '../Movies.jsx';
import MoviesDefault from '../MoviesDefault';

const Body = () => {

    const movie = useContext(movieContext);
    const [typeMovie, setTypeMovie] = useState([]);
    const [typeSeries, setTypeSeries] = useState([]);

    const getTypeMovie = () => {
            axios.get(`https://www.omdbapi.com/?s=lord&plot=full&apikey=1e4ad7bc`)
                .then(res => setTypeMovie(res.data.Search))
    }

    useEffect(() => {
        getTypeMovie();
    }, [])

    return (
        <>
        {
            typeMovie.length === 0 && movie.length === 0 &&
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
            <FallingLines
                    color="#B04759"
                    width="100"
                    visible={true}
                    ariaLabel='falling-lines-loading'
                />
            </div>
        }
            <div className={styles.container}>
                {
                    movie.Search && movie.Search.map(item => <Movies key={item.imdbID} data={item} />)
                }
            </div>
            <div className={styles.containerTwo}>
                {
                    typeMovie && movie.length === 0 ?
                    typeMovie.map(item => <MoviesDefault key={item.imdbID} data={item} />) :
                    null
                }
            </div>
        </>
    );
};

export default Body;