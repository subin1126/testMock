import React, { useState, useMemo } from 'react';
import './todolist.css';

function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const isLimit = useMemo(() => {
        return todoList.length >= 8;
    }, [todoList]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLimit) {
            setTodoList((current) => {
                return [...current, {
                    value: inputValue,
                    isCompleted: false,
                }]
            });
            setInputValue('');
        }

    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleCompletedClick = (index) => {
        setTodoList((current) => {
            const newList = [...current];
            newList[index] = { ...newList[index], isCompleted: !newList[index].isCompleted };
            return newList;
        })
    }

    const handleRemoveClick = (index) => {
        setTodoList((current) => {
            const newList = [...current];
            newList.splice(index, 1);
            return newList;
        })
    }


    return (
        <div>
            <form className='formList' onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button type='submit'>입력</button>
            </form>

            <div className='todoList'>
                <ol>
                    {
                        todoList.map((item, index) => (
                            <li className={item.isCompleted === true ? 'completed' : ''}>
                                <span>{item.value}</span>
                                <button onClick={() => handleCompletedClick(index)}>완료</button>
                                <button className='remove' onClick={() => handleRemoveClick(index)}>삭제</button>
                            </li>
                        ))
                    }
                </ol>
            </div>

            {isLimit && (
                <>
                    <div className='limit'>※ 할일 목록이 너무 많습니다.</div>
                </>
            )}
        </div>
    )
}

export default TodoList;