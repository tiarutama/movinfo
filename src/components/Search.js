import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import MovieBox from './MovieBox';

function Search() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }
    return (
        <>
            <Container className="my-5 vh-100">
                <Row className="justify-content-center">
                    <Col sm={8}>
                        <h1 className="text-center mb-5">SEARCH MOVIE BY TITLE</h1>
                        <FormGroup>
                            <Form onSubmit={searchMovie} className="d-flex">
                                <Form.Control
                                    value={query}
                                    onChange={changeHandler}
                                    placeholder="Input Title Here.." />
                                <Button variant="success" onClick={searchMovie}>Search</Button>
                            </Form>
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <Row className="mt-5 background">
                    {movies.map((movieReq) =>
                        <MovieBox key={movieReq.id} {...movieReq} />)}
                </Row>
            </Container>
        </>
    );
}

export default Search;