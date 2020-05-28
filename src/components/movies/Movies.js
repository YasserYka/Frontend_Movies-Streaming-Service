import React from 'react';
import Movie from './Movie';

const Movies = (props) => {

    const { movies } = props;

    return (
        <div className="row"> { movies.map(movie => <Movie key={movie.id} movie={movie} /> ) } </div>
    )
}

export default Movies;