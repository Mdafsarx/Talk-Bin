
export default function TopNav() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-dark p-3">
                
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Navbar</a>

                    {/* toggle-bar for small device */}
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" >Disabled</a>
                            </li>
                        </ul>

                        <div className="d-flex gap-2">
                            <button className="btn btn-primary">Setting</button>
                            <button className="btn btn-primary">Profile</button>
                        </div>

                    </div>
                </div>

            </nav>
            

        </div>
    )
}
