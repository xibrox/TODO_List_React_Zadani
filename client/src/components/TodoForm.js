import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input 
                type="text" 
                placeholder='Změnit úkol' 
                value={input} 
                name="text" 
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
            />
                
            <button className='todo-button edit'>Změnit</button>
            </> 
            ) : (
            <>
            <input 
                type="text" 
                placeholder='Přídat úkol' 
                value={input} 
                name="text" 
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />
            <button className='todo-button'>Přídat úkol</button>
            </>
            )}
        </form>
    )
}

export default TodoForm