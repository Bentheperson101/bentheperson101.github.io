export default function ItemBubble({ items }) {

    const listItem = items.map(item=>
        <div className="col item-bubble mx-2 mb-3"><b className="item-bubble-text">{item}</b></div>
    )

    return (
        <div className="row text-center text-nowrap">
            {listItem}
        </div>
    )
};