import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

// Take 'movie' details as props, taken from Movies component
export default function MovieItem(props) {
    // Log details for a movie item in the console as a side effect
    useEffect(() => {
        console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]); // Only run this effect when the myMovie prop changes

    // Print a stylized Card for the movie, displaying title, poster and year
    return (
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}