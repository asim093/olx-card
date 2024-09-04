import React, { useState } from "react";
import CardImg from "../../assets/PS5.jpg"

const Card = () => {
    const [icon, seticon] = useState(false);

    function changeIcon() {
        seticon(!icon);
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={CardImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Rs: 8000</p>
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title fs-6">PS5 Joystick </h5>
                        {
                            icon ? <i className="bi bi-heart-fill" onClick={changeIcon}></i> : <i className="bi bi-heart" onClick={changeIcon}></i>
                        }

                    </div>
                    <div className="d-flex justify-content-center flex-column card-location">
                        <p className="card-text">Karachi , Liaquatabad</p>
                        <p>2 days ago</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Card;