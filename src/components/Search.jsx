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
