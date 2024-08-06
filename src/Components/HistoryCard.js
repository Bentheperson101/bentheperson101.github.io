export default function HistoryCard({ title, desc, when }) {
    return (
        <div className="benji-border m-4">
                <h4 className="p-3">{title}</h4>
                <hr></hr>
                <p className="p-3">
                    <b>When:</b> {when}<br></br>
                    <b>Summary:</b><br></br>
                    {desc}
                </p>
                <br></br>
        </div>
    )
};