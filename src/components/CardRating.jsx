import star from "../images/icon-star.svg"

function CardRating() {
    const handleChange = () => {
        // when clicked toggle className selected
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <img src={star} alt="" />
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support
                request. All feedback is appreciated to help us
                improve our offering!
            </p>
            <div>
                <button onClick={handleChange} className="rating">1</button>
                <button onClick={handleChange} className="rating">2</button>
                <button onClick={handleChange} className="rating">3</button>
                <button onClick={handleChange} className="rating">4</button>
                <button onClick={handleChange} className="rating">5</button>
            </div>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
    )
}

export default CardRating;