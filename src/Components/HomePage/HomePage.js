import React from 'react'
import './HomePage.css'
import dark_mode from "../../Assets/dark_mode.png"
import bell from "../../Assets/bell.png"
import info from "../../Assets/info.png"
import search from "../../Assets/search.png"

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
                        <input type='text' placeholder='Search'></input>
                        <img src={search}></img>
                    </div>
                    <div className='homepage-searchbar-icons'>
                        <img src={bell}></img>
                        <img src={dark_mode}></img>
                        <img src={info}></img>
                        <div className='homepage-profile'>
                            <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage