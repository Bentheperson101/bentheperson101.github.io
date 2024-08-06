import PageHeader from "../Components/PageHeader";

export default function Contact() {
    return (
        <div>
            <PageHeader
                title="Where to Contact Me"
                desc="You can reach out to me in whatever fashion you would like."
            />
            <div className="row mb-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 benji-border p-3">
                    <h4 className="p-3 ">My Contact Info: </h4>
                    <hr></hr>
                    <div className="row p-3">
                        <div className="col mb-4">
                            <b>Professional Email:</b><i> <a href="mailto:benkosty@outlook.com">benkosty@outlook.com</a></i> <br></br>
                        </div>
                        <div className="col mb-4">
                            <b>Other Email:</b><i> <a href="mailto:bentheperson101@gmail.com">bentheperson101@gmail.com</a></i> <br></br>
                        </div>
                        <div className="col mb-4">
                            <a href="https://github.com/Bentheperson101" className="p-2 mt-5 mb-5 benji-button"><b>GitHub</b></a> <br></br><br></br>
                        </div>
                        <div className="col mb-4 text-nowrap">
                            <a href="https://www.linkedin.com/in/benjamin-kosty-7a6229321/" className="p-2 mt-5 mb-5 benji-button"><b>Linked In</b></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};