import ContentCard from "../Components/ContentCard";

const Contact = () => {
    return (
        <div className="p-3">
            <ContentCard
                title="Email, GitHub, and LinkedIn"
                content={
                    <div className="row my-auto text-center">
                        <div className="col my-4 text-nowrap">
                            <a href="mailto:benkosty@outlook.com" className="p-2 my-5 benji-link">
                                <svg viewBox="0 0 150 150" className="me-2 icon">
                                    <polyline points="5 25, 5 125, 145 125, 145 25, 5 25, 75 75, 145 25" className="icon-lines"></polyline>
                                </svg>
                                benkosty@outlook.com
                            </a> <br></br>
                        </div>
                        <div className="col my-4 text-nowrap">
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