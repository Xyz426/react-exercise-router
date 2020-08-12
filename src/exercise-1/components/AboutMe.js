import React, { Component } from 'react'
import '../style/AboutMe.css'
import {Link} from 'react-router-dom';

class AboutMe extends Component{
    render(){
        return(
            <div className='aboutMe'>
                Company:ThoughtWorks Local
                <p>Location:Xi'an</p>
                <br/>

                <p>For more information,please</p>
                <p>view our 
                   <Link to='/' color='red'> website</Link>
                </p>
            </div>
        )
    }
}

export default AboutMe;