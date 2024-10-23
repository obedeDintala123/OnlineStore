import { useNavigate } from "react-router-dom";
import './EmailSend.css';

export default function EmailSend(){
    const navigate = useNavigate();
    return (
        <div className="email-card">
            <span>A message has been sent to your email</span>
            <p>Thank you for visiting our online store.</p>
            <button onClick={() => navigate("/")}>Go to OnlineStore</button>
        </div>
    )
}