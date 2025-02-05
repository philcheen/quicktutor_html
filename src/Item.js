import React, {useState, useRef, useEffect} from 'react';

function Item({name, index, setItems}) {
    const [modifyOn, setModifyOn] = useState(false);
    const [text, setText] = useState(name);
    const refInput = useRef();

    useEffect(function () {
        if (refInput.current) refInput.current.focus();

        let array = [1, 2, 3, 4, 5];
        let [a, b, ...aaa] = array;
        console.log(a); // 1
        console.log(b); // 2
        console.log(aaa); // [3, 4, 5]
    });

    function remove() {
        setItems(function (items) {
            items = items.filter(function (item, i) {
                if (index == i) return false;
                else return true;
            });
            return [...items];
        });
    }

    function modify() {
        setModifyOn(!modifyOn);
    }

    function change(event) {
        setText(event.target.value);
    }

    function blur(event) {
        // Remove the input field
        setModifyOn(false);
        // Modify the item in items variable
        setItems(function (items) {
            items[index] = event.target.value;
            return [...items];
        });
    }

    return (
        <li style={{marginTop: "5px"}}>
            {modifyOn ?
                <input type="text" value={text} onChange={change} onBlur={blur} ref={refInput}/> :
                <span>{name}</span>
            }
            &nbsp;
            <button onClick={modify}>Modify</button>
            &nbsp;
            <button onClick={remove}>Remove</button>
        </li>
    );
}

export default Item;