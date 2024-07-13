import { FiSend } from "react-icons/fi";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
    return (
        <div className="d-flex flex-column align-items-center ">
            <div className="pt-5">
                <h1 className="text-gradient fw-bold text-uppercase">Hello, SAKIB AHMED</h1>
                <h3 className="text-uppercase text-gradient2">Welcome to direct message with MD AFSAR</h3>
                <p>DM is a unique platform designed for direct and personal communication between me and <br/> a special group of users. Whether you have questions, need advice, or just want to chat,<br /> I'm here for you.</p>
                {/* <p className="fw-bold fs-5">What You Can Expect:</p> */}

                {/* features card */}
                <div className="row gap-3 mt-4 ">

                    <div className="card col-6" style={{ width: '21rem' }}>
                        <div className="card-body">
                            <h6 className="card-title Text">Personalized Responses</h6>
                            <p className="card-text">
                                Every message you send will receive my full attention and thoughtful replies.
                            </p>
                        </div>
                    </div>

                    <div className="card col-6" style={{ width: '21rem' }}>
                        <div className="card-body">
                            <h6 className="card-title Text">Open Communication</h6>
                            <p className="card-text">
                                No topic is too big or small. Feel free to share your thoughts, ideas, or concerns.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="row gap-3 mt-3">

                    <div className="card col-6" style={{ width: '21rem' }}>
                        <div className="card-body">
                            <h6 className="card-title Text">Safe and Secure</h6>
                            <p className="card-text">
                                Your conversations are private and protected, ensuring a safe space for our chats.
                            </p>
                        </div>
                    </div>

                    <div className="card col-6" style={{ width: '21rem' }}>
                        <div className="card-body">
                            <h6 className="card-title Text">Easy Access</h6>
                            <p className="card-text">
                                Connect with me anytime, from anywhere. I’m just a message away!
                            </p>
                        </div>
                    </div>

                </div>
   
                <div className="d-flex justify-content-center">
                    <button className="btn  mt-5 d-flex align-items-center gap-2 bg text-dark"><FiSend/> Start Talking</button>
                </div>

            </div>
        </div>
    );
};

export default Home;