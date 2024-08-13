export default function AboutMeCard({ title, subtitle, text, isActive, expand }) {
    return (
        <>
            <div className="mobile-only">
                <div className="p-3">
                    {isActive ? (
                        <>
                        </>
                    ): (
                        <>
                            <button className="expand-button float-right" onClick={expand}>
                                <svg width="25" height="auto" viewBox="0 0 150 150" className="me-2" stroke="#E5F77D" class="icon-lines mx-3">
                                    <title>Expand</title> 
                                    <circle cx="75" cy="75" r="70" ></circle>
                                    <polyline points="25 50, 75 100, 125 50" className=""></polyline>
                                </svg>
                            </button>
                        </>
                    )}
                    <h4>{title}</h4>
                </div>
                <hr></hr>
                {isActive ? (
                    <>{text}</>
                ): (
                    <></>
                )}
            </div>
            <p className="p-3 tablet-desktop" style={{height:"100%"}}>
                <h4>{subtitle}
                    <hr className="mb-4"></hr>
                </h4>
                {text}
                <br></br>
            </p>
        </>
    )
};