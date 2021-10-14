import  './register.css'
import {Link} from 'react-router-dom'
function Register() {
    return (
        <div className='login'>
            <form className='loginForm'>
                <span className='loginTitle'>Register</span>
                <label >Username</label>
                <input type="text"  placeholder='Username'/>
                <label >Email</label>
                <input type="email"  placeholder='Enter your Email'/>
                <label >Password</label>
                <input type="password"  placeholder='Enter your Password'/>
                <button className='loginButton'>Register</button>
            </form>
            <button className='loginRegisterButton'>
            <Link to='/login'>Login</Link>
            </button>
        </div>
    )
}

export default Register
