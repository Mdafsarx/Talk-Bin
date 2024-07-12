import { RiChatSmileLine} from "react-icons/ri"
import img from "../assets/chatbot (2).png"
import './text.css'


export default function TopNav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark p-3">

                <div className="container-fluid">
                    <div className="navbar-brand text-white d-flex align-items-center" > 
                       <span className="Text2">GPT</span> <RiChatSmileLine className="Text2"/>
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

                        <div className="d-flex gap-2">
                            <button className="btn btn-primary">Setting</button>
                            <button className="btn btn-danger d-flex align-items-center rounded-circle"><img src={img} width={20} className="rounded-circle" alt="" /></button>
                        </div>

                    </div>


                </div>
            </nav>
        </div>
    )
}
