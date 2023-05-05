import React, { useEffect, useState, createContext } from 'react';
import getMovie from '../api/api.js';
import styles from './MovieContextProvider.module.css';

export const movieContext = createContext();
const MovieContextProvider = ( { children } ) => {
    
    const [movie, setMovie] = useState([]);

    const [name, setName] = useState("")
    const [year, setYear] = useState("");
    const submitHandler = (e) => {
        e.preventDefault()
            const fetchAPI = async () => {
                setMovie(await getMovie(name, year));
    
            }
            
            fetchAPI()
    }

    const nameHandler = async (e) => {
        setName(await e.target.value)
    }
    
    const yearHandler = async (e) => {
        setYear(await e.target.value)
    }
    
    
    return (
        <movieContext.Provider value={movie}>
            <form onSubmit={submitHandler}>
                <div className={styles.container}>
                    <div className={styles.search}>
                        <input value={name} placeholder='title' onChange={nameHandler}/>
                        <button type='submit'>Search</button>
                    </div>
                </div>
                { children }
            </form>
        </movieContext.Provider>
    );
};

export default MovieContextProvider;