import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from "react";
import Items from "./Items";
function App() {
    const [items, setItems] = useState([]);
    function add() {
        let item = "Item " + (items.length + 1);
        items.push(item);
        setItems([...items]);
    }
    return (
        <>
            <button onClick={add}>Add Item</button>
            <Items items={items} setItems={setItems}/>
        </>
    );
}
export default App;