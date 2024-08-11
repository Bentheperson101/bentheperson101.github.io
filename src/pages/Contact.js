import ContentCard from "../Components/ContentCard";

const Contact = () => {
    return (
        <div className="p-3">
            <ContentCard
                title="Email, GitHub, and LinkedIn"
                content={
                    <div className="row my-auto text-center">
                        <div className="col my-4">
                            <a href="mailto:benkosty@outlook.com" className="p-2 my-5 benji-link">benkosty@outlook.com</a> <br></br>
                        </div>
                        <div className="col my-4">
                            <a href="https://github.com/Bentheperson101" className="p-2 my-5 benji-link" target="_blank" rel="noreferrer"><b>GitHub - Bentheperson101</b></a> <br></br><br></br>
                        </div>
                        <div className="col my-4 text-nowrap">
                            <a href="https://www.linkedin.com/in/benjamin-kosty-7a6229321/" className="p-2 my-5 benji-link" target="_blank" rel="noreferrer"><b>Linked In - Benjamin Kosty</b></a>
                        </div>
                    </div>
                }
            />
        </div>
    )
};

export default Contact;