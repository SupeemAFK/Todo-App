import React, { useState } from 'react'

import { RiDeleteBinLine, RiFileEditFill } from 'react-icons/ri'
import { MdCheck } from 'react-icons/md'

export default function Todo({ todo, title, id, deleteTodo, editTodo }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [isCompleted, setIsCompleted] = useState(false)

    return (
        <div className="todo-container">
            {isEdit ? (
                <div className="todo">
                    <input className="edit-input" type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
                    <button className="check-btn" onClick={() => editTodo(todo, newTitle, setIsEdit)}><MdCheck /></button>
                </div>
            ) : (
                <div className={isCompleted ? 'todo completed' : 'todo'} onClick={() => setIsCompleted(!isCompleted)}>
                    <h3 className="title">{title}</h3>
                    <div className="todo-btn-container">
                        <button className="edit-btn" onClick={() => setIsEdit(true)}><RiFileEditFill /></button>
                        <button className="delete-btn" onClick={() => deleteTodo(id)}><RiDeleteBinLine /></button>
                    </div>
                </div>
            )}
        </div>
    )
}
