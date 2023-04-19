import React, { useState } from 'react'
import styles from '../css/sidebar.module.css'




function SideBar() {

    const [show, setShow] = useState(true);

    const toggler = () => {
        setShow(!show);
        console.log(show, 'Current State');
    }
    return (
        <>
            <div className={`${show === true ? styles.open : styles.close}`}>SideBar
                <div>
                    <button onClick={toggler}>X</button>
                </div>
            </div>
        </>
    )
}

export default SideBar