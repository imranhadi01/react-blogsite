import './Post.css'


function Post() {
    return (
        <div className='post'>
            <img className='postImg' src="https://images.unsplash.com/photo-1633712454766-a54eae84f1e1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className='postinfo'>
        <div className="postcats">
            <span className='postcat'>Music</span>
            <span className='postcat'>Life</span>
        </div>
        <span className='postTitle'>
            Lorem ipsum dolor sit amet.
        </span>
        {/* <hr /> */}
        <span className='postdate'>1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolores dicta amet aut asperiores, minima sequi, quasi, animi modi repellendus reiciendis incidunt distinctio totam mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, minus ipsum non repellat reprehenderit id ex aliquam eum quae expedita. Architecto dicta doloribus id reiciendis?</p>
        </div>
    )
}

export default Post
