import {React, useState} from 'react';
import * as Icon from 'react-bootstrap-icons';
import './TodayTask.css';


const TodayTask = () => {

    return(
        <>
            <div className='task-header'>
                <div className='task-title'><Icon.AlarmFill class='alarm-icon'width={50}/><p>Wake up Buddy</p></div>
                <p className='time'>8:00 AM</p>
            </div>
        </>
    )
}

export default TodayTask;