import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { cloudData } from './SidebarData'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IconContext } from "react-icons"
import { AiOutlineFolderAdd } from 'react-icons/ai'
import AddItem from './AddItem'
import './Navbar.css'


function Navbar() {
    const [favorites, setFavorites] = useState(SidebarData)
    const [cloud, setCloud] = useState(cloudData)
    const [toggle, setToggle] = useState(false)

    const addToggle = () => {
        setToggle(true)
    }
    const addItem = (res) => {
        setFavorites([...favorites, res])
        addToggle(false)
    }
    const deleteItem = (i) => {
        const result = favorites.filter((el, index) => {
            return index !== i
        })
        setFavorites(result)
    }
    return (<div>
        <div className="navbar">

        </div>
        <IconContext.Provider value={{ color: 'blue' }}>
            <nav className="nav-menu">
                <ul className="nav-menu-items">
                    <h3 style={{ color: 'purple', textAlign: 'center' }} className="nav-text">Favorites <AiOutlineFolderAdd onClick={addToggle} style={{ color: 'blue', fontSize: '30px', marginLeft: '30px' }} /></h3>
                    {toggle && <AddItem addItem={addItem} />}
                    {favorites.map((el, i) => {
                        return (
                            <div key={i}>
                                <li key={i} className={el.cName}>
                                    <Link to={el.path}>
                                        {el.icon}
                                        <span key={el.path} >{el.title} </span>

                                        <RiDeleteBin6Line style={{ marginLeft: '10px', color: 'red' }} onClick={() => { deleteItem(i) }} />


                                    </Link></li>
                            </div>)

                    })}<br />
                    <h4 style={{ color: 'purple', textAlign: 'center' }} className="nav-text">iCloud</h4>
                    {cloud.map((el, i) => {
                        return (
                            <div key={i}>
                                <li key={i} className={el.cName}>
                                    <Link to={el.path}>
                                        {el.icon}
                                        <span key={el.path} >{el.title} </span>

                                        <RiDeleteBin6Line style={{ marginLeft: '10px', color: 'red' }} onClick={() => { deleteItem(i) }} />


                                    </Link></li>
                            </div>)

                    })}

                </ul>
            </nav>
        </IconContext.Provider>



    </div>)
}
export default Navbar