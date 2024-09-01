import thanks from "../images/illustration-thank-you.svg";

function CardSuccess() {
    return (
        <div>
            <img src={thanks} alt="" />
            {/* Change 4 to show selected rating */}
            <button className="rating">You selected 4 out of 5</button>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a 
                rating. If you ever need more support, don't 
                hesitate to get in touch!
            </p>
        </div>
    )
}

export default CardSuccess;