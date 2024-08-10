export default function ContentCard({ title, content }) {
    return (
        <div className="row mb-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 benji-border p-3">
                {title === "" ? <></> : <><h4 className="p-3 ">{title}</h4><hr></hr></>}
                {content}
            </div>
            <div className="col-lg-2"></div>
        </div>
    )
};