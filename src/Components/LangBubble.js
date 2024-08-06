export default function LangBubble({ langs }) {

    const listItem = langs.map(lang=>
        <div className="col lang-bubble"><b className="lang-bubble-text">{lang}</b></div>
    )

    return (
        <div className="row text-center text-nowrap">
            {listItem}
        </div>
    )
};