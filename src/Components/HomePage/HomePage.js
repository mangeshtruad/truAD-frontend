import React from 'react'
import './HomePage.css'
import dark_mode from "../../Assets/dark_mode.png"
import bell from "../../Assets/bell.png"
import info from "../../Assets/info.png"

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <div className='homepage-header'>
            <div className='homepage-user-info'>
                <p>aniketm@truad.co</p>
                <h4>Hi Aniket</h4>
            </div>
            <div className='homepage-searchbar'>
                <div className='homepage-searchbar-container'>
                    <div className='searchbar'>
                        <input type='text'></input>
                        <img></img>
                    </div>
                    <div className='homepage-searchbar-icons'>
                        <img src={bell}></img>
                        <img src={dark_mode}></img>
                        <img src={info}></img>
                        <div className='homepage-profile'>
                            <img></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage