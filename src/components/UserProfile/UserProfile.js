import React,  {useState, useEffect, useLayoutEffect } from 'react';
import avatarImage from '../../../public/assets/images/avatar/avt-4.jpg';
import itemImage from '../../../public/assets/images/product-item/item-19.jpg';
import authorIcon from '../../../public/assets/images/icon/author.svg';
import settingIcon from '../../../public/assets/images/icon/setting.svg';
import notificationIcon from '../../../public/assets/images/icon/notification.svg';
import manageIcon from '../../../public/assets/images/icon/manage.svg';
import uploadIcon from '../../../public/assets/images/icon/upload.svg';
import logoutIcon from '../../../public/assets/images/icon/logout.svg';
import { useDisconnect, useAccount } from 'wagmi'


const UserProfile = () => {
  const [show, setShow] = useState(false);

  const { disconnect } = useDisconnect()
  const { address, isConnected, isDisconnected } = useAccount()


  useEffect(() => {
    if (isConnected) {
        
    } else {
        setShow(false);
    }
     // Ensuring initial state on client matches server
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };
    return (
        <div className="admin_active active" id="header_admin" onClick={toggleShow} >
            <div className={show ? 'header_avatar show' : 'header_avatar'}>
                <img className="avatar" src={avatarImage.src} alt="avatar" />
                <div className="avatar_popup " id="target-avatar">
                    <div className="top flex">
                        <div className="infor">
                            <div className="author">
                                <h6 className="author-name">John Michel.S Davis</h6>
                                <span>Set Display Name</span>
                            </div>
                            <div className="item flex w-100">
                                <div className="img mr-2 ">
                                    <img src={itemImage.src} alt="Image" />
                                </div>
                                <div className="infor">
                                    <div className="item-name">Balance</div>
                                    <div className="price">38 ETH |  38 WETH </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="menu-options">
                        <li><a href="/profile"><img src={authorIcon.src} alt="Image" /><span>Profile</span></a></li>
                        <li><a href="/account"><img src={settingIcon.src} alt="Image" /><span> Account Setting</span></a></li>
                        <li><a href="collections"><img src={manageIcon.src} alt="Image" /><span> Manage Items</span></a></li>
                        <li><a href="/upload"><img src={uploadIcon.src} alt="Image" /><span> Upload Items</span></a></li>
                        <li><a href="faqs"><img src={notificationIcon.src} alt="Image" /> <span> Learn</span></a></li>
                        <li><a href="#" onClick={() => disconnect()}><img src={logoutIcon.src} alt="Image" /><span>Disconnect</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
