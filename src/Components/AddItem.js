import React, { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
function AddItem(props) {
    const [name, setName] = useState('')
    const { addItem } = props
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = { title: name, path: `/${name}`, icon: <AiFillFolder />, cName: 'nav-text' }
        addItem(result)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleName} value={name} />

            </form>

        </div>
    )
}
export default AddItem