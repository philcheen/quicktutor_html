import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import Items from "./Items";

function App() {



    function loadImage(url) {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject("Unable to load the image.");
            };
            img.src = url;
        });
    }

    loadImage("file:///D:/Work/Example/QuickTutor_files/a-tutor-fit.svg")
        .then(function (img) {
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error(error);
        });

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