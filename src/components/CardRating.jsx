import { useState } from "react"
import { useNavigate } from "react-router-dom";
import star from "../images/icon-star.svg"

function CardRating() {
    const [rating, setRating] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        // when clicked toggle className selected
        setRating(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/complete", {state: {rate: rating}});    
    }

    return (
        <div className="card">
            <img src={star} alt="" />
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!
            </p>
            <div>
                <button onClick={handleChange} value={1} className="rating">1</button>
                <button onClick={handleChange} value={2} className="rating">2</button>
                <button onClick={handleChange} value={3} className="rating">3</button>
                <button onClick={handleChange} value={4} className="rating">4</button>
                <button onClick={handleChange} value={5} className="rating">5</button>
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
    )
}

export default CardRating;