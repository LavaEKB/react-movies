import React from 'react'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

//Читаем api key из .env.local
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true // при первой загрузке. Переключается после загрузки в componentDidMount и в searchMovie
    }

    //для передачи props наверх (Search -> Main)
    searchMovie = (searchMov, type = 'all') => {
        this.setState({ loading: true });
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMov}${type !== 'all' ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    // Search - в componentDidMount - массив из JSON
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))

    }

    render() {
        const { movies, loading } = this.state;

        return <main className="container content">
            <Search searchMovie={this.searchMovie} />
            {
                loading ? (
                    <Preloader />
                ) : <Movies movies={movies} />
            }
        </main>
    }
}

export { Main }