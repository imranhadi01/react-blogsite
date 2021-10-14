import  './home.css'
import Header from './Header'

import Posts from '../../Components/Posts/Posts'


function Home() {
    return (
        <>
           <Header /> 
            <div className='home'>
                <Posts />
                

            </div>
           
        </>
    )
}

export default Home
