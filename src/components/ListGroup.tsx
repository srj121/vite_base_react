import {MouseEvent} from "react";

function ListGroup() {
    let items =['Delhi', 'Gujarat','indore'];
    let seectedindex = 0;

    const  handleClick = (event: MouseEvent) => console.log(event);

        return (
            <>
        <h1>List</h1>
                { items.length === 0 && <p>No item found</p> }

        <ul className="list-group">

            {items.map((item) =>(
                <li className="list-group-item active"
                    key={item}
                    onClick={handleClick}
                >
                    {item}
                </li>
            ))}
    </ul>
        </>
    );
}
export default ListGroup;