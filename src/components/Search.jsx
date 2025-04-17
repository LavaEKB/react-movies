import React, { useState } from "react";

//можно деструктуризацию сделать при объявлении функции:
//const Search = ({searchMovie}) => {
const Search = (props) => {
    const {
        //на случай, если функция не придет в props присваиваем значение по-умолчанию, что это некая функция, которая ничего не далает
        searchMovie = Function.prototype,
    } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const changeR = (e) => {
        setType(e.target.dataset.type);
        searchMovie(search, e.target.dataset.type);
    }
    // вместо data-type был value - не работало! (radio не работал)
    // data-type хранит состояния type
    return (
        <div className="row">
            <div className="input-field">
                <input
                    id="src"
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(ev) =>
                        ev.key === "Enter" ? searchMovie(search, type) : ""
                    }
                />
                <div>
                    <label>
                        <input className="with-gap"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={changeR}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={changeR}
                            checked={type === 'movie'}
                        />
                        <span>Movie only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={changeR}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
                <button
                    className="btn search-btn"
                    onClick={() => searchMovie(search, type)}
                >
                    Search
                </button>
                <div></div>
            </div>
        </div>
    );
}
export { Search };

// На классах:
/*
import React from "react";

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    };

    changeR = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        });

    }
    // вместо data-type был value - не работало! (radio не работал)
    // data-type хранит состояния type
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        id="src"
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({
                                search: e.target.value,
                            })
                        }
                        onKeyDown={(ev) =>
                            ev.key === "Enter" ? this.props.searchMovie(this.state.search, this.state.type) : ""
                        }
                    />
                    <div>
                        <label>
                            <input className="with-gap"
                                name="type"
                                type="radio"
                                data-type='all'
                                onChange={this.changeR}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='movie'
                                onChange={this.changeR}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movie only</span>
                        </label>
                        <label>
                            <input
                                className="with-gap"
                                name="type"
                                type="radio"
                                data-type='series'
                                onChange={this.changeR}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                    <button
                        className="btn search-btn"
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
                    >
                        Search
                    </button>
                    <div></div>
                </div>
            </div>
        );
    }
}
export { Search };

*/