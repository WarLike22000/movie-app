//context
import MovieContextProvider from './context/MovieContextProvider';
//components
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Movie from './components/Movie';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <MovieContextProvider>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/:title/:year' element={<Movie />} />
      </Routes>
    </MovieContextProvider>
    <Footer />
    </>
  )
}

export default App
