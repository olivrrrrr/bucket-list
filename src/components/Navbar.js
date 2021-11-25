import React from 'react'
import { GiStarSwirl } from "react-icons/gi";


const Navbar = () => {

    const changeTheme = () => {
        const swirl = document.querySelector('.swirl')
        const navbar = document.querySelector('.navbar')
        const details = document.querySelectorAll('.details')


        swirl.addEventListener('click', () => {
            document.body.classList.toggle('light-theme')
            navbar.classList.toggle('light-theme')
            details.forEach((detail) => {
                detail.classList.toggle('light-theme')
            })
        })
    }

    return (
        <>
        <header className="navbar">
            <div>
                <h1>Countries To Visit Before You Kick The Bucket</h1>
            </div>
            <div >
                
                <GiStarSwirl className='swirl' onClick={() => changeTheme()}/> Dark/Light
            </div>
        </header>
        </>
    )
}

export default Navbar