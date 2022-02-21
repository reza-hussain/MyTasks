import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import PinnedTasks from './PinnedTasks';

function Column1() {
    return(
        <div className="container column-1">
            <div className='new-row row-1 logo'>
                <Icon.PersonFill color={'#F8D57E'} size={30}/>
                <h2  style={{marginBottom:0}}>Task App</h2>
            </div>
            
            {/* Weekly Pinned Area */}
            <div className='new-row row-2 weekly-pinned'>
                <div className='pinned-title'>
                    <div className='col-8'><h2>Weekly Pinned</h2></div>
                    <div><h3>View All</h3></div>
                </div>
                <div className='pinned-tasks'>
                    <PinnedTasks className='task' />
                    <PinnedTasks className='task' />
                    <PinnedTasks className='task' />
                </div>
            </div>
        </div>
    );
};

export default Column1;
