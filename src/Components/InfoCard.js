import { useState } from "react"

export default function InfoCard({title, subtitle, text}) {
    const [showMore, setShowMore] = useState(false);

    function clickHandler(e) {
        setShowMore(!showMore);
    }

    return (
        <div className="col mb-5">
            <h5><b>{title}</b></h5>
            <p><b>{subtitle}</b></p>
            {text!== null ? (
                showMore ? (
                    <><p>{text}</p><button className="expand-button" onClick={clickHandler}>↑ Hide details</button></>
                ) : (
                    <><button className="expand-button" onClick={clickHandler}>↓ Show details</button></>
                )
            ) : null}
        </div>
    )
};