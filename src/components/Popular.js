import { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import MovieBox from './MovieBox';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=50105836f17a7555f7f910e289c9d302";

function Popular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results);
            })
    }, [])

    return (
        <>
            <Container className="my-5 justify-content-center">
                <h1 className="text-center mb-5">POPULAR MOVIES</h1>
                <hr />
                <Row>
                    {movies.map((movieReq) =>
                        <MovieBox key={movieReq.id} {...movieReq} />)}
                </Row>
            </Container>
        </>
    );
}

export default Popular;