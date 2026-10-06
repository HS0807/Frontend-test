"use client";
import React from 'react'
import { useState } from 'react'

export default function TodoList() {

    const [task, setTask] = useState("");
    const [mytask, setMyTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        setMyTask([...mytask, { task  }])
        setTask("");
        console.log(mytask)
    }

    const deleteHandler = (i) => {
        let CopyTask = [...mytask]
        CopyTask.splice(i, 1)
        setMyTask(CopyTask);
    }

    let Addedtsk = mytask.map((t, i) => {
        return (
            <li key={i} className='flex item-center justify-between p-3 mb-3 '>
                <div>
                    <h3 className='font-semibold'>{t.task}</h3>
                </div>
                <button className='bg-red-500 hover:bg-red-300 rounded p-2' onClick={() => deleteHandler(i)}>Delete Task</button>
            </li>
        )
    })
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    text='text'
                    value={task}
                    placeholder='Enter Task...'
                    onChange={(e) => setTask(e.target.value)}
                    className='border-2 m-5 p-2'
                />

                <button className='bg-black text-white p-2 text-2xl rounded m-5'>Add Task</button>
            </form>
            <div className='m-5'>
                <h2 className='p-2'>My all task:-</h2>
                {Addedtsk}
            </div>


        </div>
    )
}
