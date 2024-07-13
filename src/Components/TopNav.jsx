import { RiChatSmileLine } from "react-icons/ri"
import img from "../assets/JavaScript-logo.png"
import './text.css'
import { LuSun } from "react-icons/lu"
import { useState } from "react"
import { FaRegMoon } from "react-icons/fa"


export default function TopNav() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark p-">

                <div className="container-fluid">

                    <div className="navbar-brand text-white d-flex align-items-center" >
                        <span className="Text2">DM</span> <RiChatSmileLine className="Text2" />
                    </div>

                    {/* toggle-bar for small device */}
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* profile */}
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >Disabled</a>
                            </li> */}
                        </ul>

                        <div className="d-flex flex-row align-items-center gap-2 text-white">
                            <span className="fs-3 pb-1 Text2"
                                onClick={() => setToggle((prev) => !prev)}>{toggle ? <FaRegMoon /> : <LuSun />}</span>
                            <img src={img} className="rounded-circle img-size Border" alt="" />
                        </div>

                    </div>


                </div>
            </nav>
        </div>
    )
}
