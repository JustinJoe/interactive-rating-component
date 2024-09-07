import { useLocation } from "react-router-dom";
import thanks from "../images/illustration-thank-you.svg";

function CardSuccess() {
    const location = useLocation();
    const {rate} = location.state;

    return (
        <div className="card success">
            <img src={thanks} alt="" />
            <button className="user-rating">You selected {rate} out of 5</button>
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