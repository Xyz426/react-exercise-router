import React, { Component } from 'react'
import '../style/MyProfile.css'

class MyProfile extends Component{
    render(){
        return(
            <div className='myProfile'>
                Username:xxx
                <p>Gender:Female</p>
                <p>Work:IT Industry</p>
                <p>Website:'/my-profile'</p>
            </div>
        )
    }
}

export default MyProfile;