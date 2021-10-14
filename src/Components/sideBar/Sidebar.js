import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro, eum.
        </p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sideBarList">
            <li className="sideBarlistItem">Life</li>
            <li className="sideBarlistItem">Music</li>
            <li className="sideBarlistItem">style</li>
            <li className="sideBarlistItem">Sport</li>
            <li className="sideBarlistItem">Tech</li>
            <li className="sideBarlistItem">Cinema</li>
            
        </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">Follow Us on</span>
        <div className='socail-icon'>
        <i className="sidebarsocial topicon fab fa-twitter"></i>
        <i className="sidebarsocial topicon fab fa-facebook"></i>
        <i className="sidebarsocial topicon fab fa-github"></i>
        <i className="sidebarsocial topicon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
