import { FaRocketchat } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import './text.css'
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <div>
      <div className="bg-dark vh-100 d-inline-block" style={{ width: '70px' }}>

        <div className="d-flex flex-column align-items-center justify-content-between vh-100">

          <div className="p-3 mt-5  d-flex  flex-column align-items-center gap-3">
            <NavLink className={'Text mt-4'} to={'/'}><IoHomeOutline className="fs-2" /></NavLink>
            <NavLink className={'Text'} to={'/chat'}><FaRocketchat className="fs-2" /></NavLink>
            <NavLink className={'Text'} to={'/notification'}><MdOutlineNotificationsActive className="fs-2" /></NavLink>
            <NavLink className={'Text'} to={'/about-us'}><IoIosInformationCircleOutline className="fs-2" /></NavLink>
            <NavLink className={'Text'} to={'/setting'}><IoSettingsOutline className="fs-2" /></NavLink>
          </div>

          <div>
            <p><RiLogoutBoxRLine className="fs-2 Text" /></p>
          </div>

        </div>

      </div>
    </div>
  )
}
