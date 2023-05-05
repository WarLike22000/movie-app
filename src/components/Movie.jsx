import React, { useState } from 'react';
import axios from 'axios';
import { FallingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { AccessTime, CalendarMonth, Group, Language, Paid, Person, Public, ReceiptLong, Star, Theaters, Title } from '@mui/icons-material';
import imdb from '../assets/imdb.png';
import styles from './Movie.module.css';

const Movie = () => {

    const { title, year } = useParams();
    const [data, setData] = useState()

    const getMovie = async () => {
        const responseTwo = axios.get(`https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=1e4ad7bc`)
        setData((await responseTwo).data)
    }
    getMovie()
    
    return (
        <div>
            {
                data &&
            <div className={styles.container}>
                    <div className={styles.poster}>
                        <img src={data.Poster} />
                    </div>
                <div className={styles.mainContainer}>
                    <div className={styles.first}>
                        <div>
                            <Title sx={{color: '#85929E'}} />
                            <p>Title: {data.Title}</p>
                        </div>
                        <div>
                            <Theaters sx={{color: '#85929E'}} />
                            <p>Genre: {data.Genre}</p>
                        </div>
                        <div>
                            <CalendarMonth sx={{color: '#85929E'}} />
                            <p>Released: {data.Released}</p>
                        </div>
                        <div>
                            <Language sx={{color: '#85929E'}} />
                            <p>Language: {data.Language}</p>
                        </div>
                        <div>
                            <AccessTime sx={{color: '#85929E'}} />
                            <p>Runtime: {data.Runtime}</p>
                        </div>
                        
                    </div>
                    <div className={styles.second}>
                        <div>
                            <Person sx={{color: '#85929E'}} />
                            <p>Director: {data.Director}</p>
                        </div>
                        <div>
                            <Group sx={{color: '#85929E'}} />
                            <p>Actors: {data.Actors}</p>
                        </div>
                        <div>
                            <Public sx={{color: '#85929E'}} />
                            <p>Country: {data.Country}</p>
                        </div>
                        <div>
                            <Star sx={{color: '#85929E'}} />
                            <p>Metascore: {data.Metascore}</p>
                        </div>
                        <div>
                            <Paid sx={{color: '#85929E'}} />
                            <p>BoxOffice: {data.BoxOffice}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.third}>
                    <div>
                        <img src={imdb} alt='IMDB' />
                        <p>{data.imdbRating} / 10</p>
                    </div>
                    <div>
                        <ReceiptLong sx={{color: '#85929E'}} />
                        <p>Plot: {data.Plot}</p>
                    </div>
                </div>
            </div>
            }
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '153px', marginBottom: '250px'}}>
                {
                    !data && <FallingLines
                    color="#B04759"
                    width="100"
                    visible={true}
                    ariaLabel='falling-lines-loading'
                />
                }
            </div>
        </div>
    );
};

export default Movie;