import Sidebar from "../../../Components/sideBar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingswrapper">
        <div className="settingtitle">
          <span className="settingupdate">Update your Account</span>
          <span className="settingDelete">Delete Account</span>
        </div>
        <form className="formgroup">
          <label>Profile picture</label>
          <div className="settingpp">
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            </div>
            <label htmlFor="fileinput">
              <i className="ppicon far fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          
          <label>Username</label>
          <input type="text" placeholder="ed" />
          <label>Email</label>
          <input type="email" placeholder="ed@gmail.com" />
          <label>password</label>
          <input type="password" placeholder="ed" />
        <button className='settingsubmit'>Update</button>
        </form>

      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
