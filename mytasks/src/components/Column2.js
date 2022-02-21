import React from 'react';
import { } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import TodayTask from './TodayTask';

function Column2() {
    return(
        <div  className='column-2'>
            <div className='row-1'>
                <div>
                    Today's Schedule
                </div>
                <div>
                    <Icon.PlusCircleFill color='#F8D57E' />
                </div>
            </div>
            <div className='row-2 today-tasks'>
                <div className='today-date'>Thursday 11</div>
                <div className='today-task'>
                    <TodayTask />
                </div>
            </div>
        </div>
    );
};

export default Column2;
