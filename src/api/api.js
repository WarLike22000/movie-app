import axios from 'axios';

const getMovie = async (name, year) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${name}&y=${year}&plot=full&apikey=1e4ad7bc`)
    return response.data;
}

// https://api.spoonacular.com/recipes/716429/information?apiKey=b1b13906dad44a319e6c71c193f83e1d&includeNutrition=true
export default getMovie;