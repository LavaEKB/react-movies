import React, { useState, useEffect } from "react";
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

//Читаем api key из .env.local
const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // при первой загрузке. Переключается после загрузки в componentDidMount и в searchMovie

    //для передачи props наверх (Search -> Main)
    const searchMovie = (searchMov, type = 'all') => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchMov}${type !== 'all' ? `&type=${type}` : ""}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }

    // Search - в useEffect - массив из JSON
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, []); // Зависимости [] пустые, т.к. нужен только DidMount

    return <main className="container content">
        <Search searchMovie={searchMovie} />
        {
            loading ? (
                <Preloader />
            ) : <Movies movies={movies} />
        }
    </main>
}

export { Main }

//На классах:
/*
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
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            })
    }

    // Search - в componentDidMount - массив из JSON
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            })
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
*/

/* Примеры использования useEffect
    
    import somePlugin from 'plugin';

    export const Effect = () => {
        
        //Этот useEffect вешает и удаляет обработчик (прямой комментарий)
        useEffect(() => {
            const handler = () => {некая функция для создания handler}
                document.addEventListener('click', handler)

                return () => {document.removeEventListener('click', handler)}
            }, []);

        //Можно именовать функцию    
        useEffect(function initPlugin() {
            somePlugin.init();

            return () => {somePlugin.destroy()}
        }, [] )

        return <div></div>
        };

*/