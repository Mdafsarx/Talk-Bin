import img from "../../assets/68747470733a2f2f6d656469612e74656e6f722e636f6d2f7a7a6e746d325f3942336741414141432f6861636b65722e676966.gif"
import img2 from "../../assets/JavaScript-logo.png"

const About = () => {
    return (
        <div>
            <div>
                <img src={img} alt="" className="w-100 rounded-3" height={450} />

                <figure className="ms-5">
                    <img src={img2} alt="" width={150} className="profile rounded-4 border border-white border-4" />
                </figure>

            </div>
        </div>
    );
};

export default About;