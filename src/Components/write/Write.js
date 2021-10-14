import './write.css'

function Write() {
    return (
        <div className='write'>
        <img className='writeimg' src="https://images.unsplash.com/photo-1633712454766-a54eae84f1e1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <form className='writeform'>
                <div className='writeFormGroup'>
                    <label htmlFor="fileinput">

                    <i className='icon fas fa-plus'></i>
                    </label>
                    <input type="file" id='fileinput' style={{display:'none'}}/>
                    <input type="text" placeholder='Title' className='writeinput' autoFocus={true} />
                </div>
            </form>
            <div className='writeFormGroup'>
                <textarea placeholder='share your story' className='writeinput writetext' ></textarea>
                <button className='writeSubmit'>Publish</button>
            </div>
        </div>
    )
}

export default Write
