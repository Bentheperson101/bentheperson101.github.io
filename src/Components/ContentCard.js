export default function ContentCard({ title, content }) {
    return (
        <div className="row mb-4">
            <div className="col-lg-6 mx-auto benji-border p-3">
                {title === "" ? <></> : <><h4 className="p-3 ">{title}</h4><hr></hr></>}
                {content}
            </div>
        </div>
    )
};