export default function ItemBubble({ items }) {

    const listItem = items.map(item=>
        <>
            <li className="text-center text-nowrap"><b>{item}</b></li>
        </>
    )

    return (
        <div className="">
            <ul className="item-lists">
                {listItem}
            </ul>
        </div>
    )
};