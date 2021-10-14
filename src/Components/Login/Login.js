import  './login.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <form className='loginForm'>
                <span className='loginTitle'>Login</span>
                <label >Email</label>
                <input type="email"  placeholder='Enter your Email'/>
                <label >Email</label>
                <input type="password"  placeholder='Enter your Password'/>
                <button className='loginButton'>Login</button>
            </form>
            <button className='loginRegisterButton'>
            <Link to='/register'>Register</Link>
            </button>
        </div>
    )
}

export default Login
