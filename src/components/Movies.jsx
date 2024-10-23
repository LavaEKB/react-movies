import React from "react";
import { Movie } from './Movie'

function Movies(props) {
    // чтобы в movies не приходил undefined в случае пустого ответа JSON ставим значение по умолчанию: []
    const { movies = [] } = props;
    // key - обязательный уникальный параметр (требования React).

    // {...<object>} - предоператор. Все ключи объекта отправим вниз
    // чтобы не писать все ключи вручную.
    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie} />
        )) : <h4>Nothing found</h4>
        }
    </div>
}

export { Movies }