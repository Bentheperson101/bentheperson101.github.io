export default function AboutMeCard({ title, subtitle, text }) {
    return (
        <>
            <div className="mobile-only">
                <div className="p-3">
                    <h4>{title}</h4>
                </div>
                <hr></hr>
            </div>
            <p className="p-3">
                <h4 className="tablet-desktop">{subtitle}
                    <hr className="mb-4"></hr>
                </h4>
                {text}
                <br></br>
            </p>
        </>
    )
};