import  './singlepost.css'


function SinglePost() {
    return (
        <div className='singlePost'>
         <div className='singlepostwraper'>
             <img className='singlepostimg' src="https://images.unsplash.com/photo-1633712454766-a54eae84f1e1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1 className='singleposttitle'>Lorem ipsum dolor sit amet.
            <div className="singlepostedit">
            <i className="singleposticon far fa-edit"></i>
            <i className="singleposticon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className='singlepostinfo'>
                <span className='singlepostautor'>Author: <b>ED</b></span>
                <span className='singlepostdate'>1 hour ago</span>
            </div>
            <div className='singlepostdesc'>
            <p>Lorem ipsum dolor sit amet consect et elig obcaecati perferendis suscipit minima expedita minus sunt quasi! Excepturi, hic. Similique placeat fugiat, harum porro inventore recusandae enim minus? Impedit neque explicabo enim, mollitia voluptates expedita sed pariatur ab tenetur, saepe blanditiis error reprehenderit at laudantium eos doloremque debitis numquam eius quisquam quam perspiciatis nulla placeat incidunt! Laborum sapiente facilis, neque ullam mollitia officia eveniet id minus reiciendis soluta illum eius! Aut veritatis commodi voluptatibus doloremque. Doloremque vel, iusto velit reprehenderit quasi dicta ducimus nihil voluptate omnis illo. Possimus suscipit dicta ab, qui asperiores corrupti iure non vero nesciunt, odit quod doloremque sint eligendi porro libero obcaecati, error perferendis? Nam animi eum at maxime suscipit, accusamus quis ut voluptatem similique corrupti tempora sapiente corporis magni officia culpa quas sequi placeat dolores natus quod, quisquam quasi in laborum dolorum! Doloremque officiis, corrupti exercitationem atque neque qui dolore impedit nostrum iste nemo quod voluptatum eligendi, ab magni, eos rerum harum placeat alias illo ipsa. Adipisci, eligendi debitis.</p>
            </div>
         </div> 
        </div>
    )
}

export default SinglePost
