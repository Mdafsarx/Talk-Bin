import { FaRocketchat } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import {  MdOutlineNotificationsActive } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import './text.css'

export default function SideNav() {
  return (
    <div>
      <div className="bg-dark vh-100 d-inline-block" style={{ width: '70px' }}>

        <div className="d-flex flex-column align-items-center justify-content-between vh-100">

          <div className="p-3 mt-5 Text d-flex  flex-column align-items-center gap-3">
            <p className="mt-4"><IoHomeOutline className="fs-2" /></p>
            <p><FaRocketchat className="fs-2" /></p>
            <p><MdOutlineNotificationsActive className="fs-2" /></p>
            <p><IoIosInformationCircleOutline className="fs-2" /></p>
            <p><IoSettingsOutline className="fs-2" /></p>
          </div>

          <div>
            <p><RiLogoutBoxRLine className="fs-2 Text" /></p>
          </div>

        </div>

      </div>
    </div>
  )
}
