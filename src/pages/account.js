import React, { useState } from 'react'
import EditPicture from "../components/EditPicture/EditPicture"
import EditProfile from "../components/EditProfile/EditProfile"
import NotificationSettings from "../components/NotificationSettings/NotificationSettings"

export default function account() {
  const [activeComponent, setActiveComponent] = useState('profile-picture');

  const handleComponentChange = (e, component) => {
    e.preventDefault();
    setActiveComponent(component);
  }
  

  return (
    <>
    <div className="tf-section post-details" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mt-5">
              <aside className="side-bar">
                <div className="widget item wg-category">
                  <div className="wg-title">Manage Profile</div>
                  <ul>
                    <li>
                      <a href="#"  onClick={(e) => handleComponentChange(e,'profile-picture')}>
                        <span>Profile Picture</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"  onClick={(e) => handleComponentChange(e,'user-profile')}>
                        <span>User Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="#"  onClick={(e) => handleComponentChange(e,'notification')}>
                        <span>Notification</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12 pt-0">
              <article className="blog-details">
                {activeComponent === 'profile-picture' && <EditPicture />}
                {activeComponent === 'user-profile' && <EditProfile />}
                {activeComponent === 'notification' && <NotificationSettings />}
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
