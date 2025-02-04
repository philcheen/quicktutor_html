import React from 'react';
import Item from "./Item";
function Items({ items , setItems}) {
    return (
        <ul style={{ listStyleType: "none" }}>
            {items.map(function (item, index) {
                return <Item key={index} name={item} index={index} setItems={setItems}/>;
            })}
        </ul>
    );
}
export default Items;