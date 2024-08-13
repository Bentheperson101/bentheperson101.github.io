export default function ItemBubble({ items }) {

    const listItem = items.map(item=>
        <>
            <div className="col-4 text-center text-nowrap"><b>{item}</b></div>
        </>
    )

    return (
        <div className="row item-lists">
            {listItem}
        </div>
    )
};