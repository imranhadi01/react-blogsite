import React from './single.css'
import Sidebar from '../../Components/sideBar/Sidebar'
import SinglePost from '../singlepost/SinglePost'

function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default Single
