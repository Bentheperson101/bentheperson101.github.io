export default function ProjectCard({ title, langs, desc, img, link }) {
    return (
        <div className="row mb-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 benji-border p-3">
                <div className="row p-3">
                    <h4 className="p-3" >{title}</h4>
                    <hr></hr>
                    <div className="col p-3">
                        <h5>Tech Used:</h5> <p>{langs}</p>
                        <br></br>
                        <h5>Summary:</h5>
                        {desc}
                    </div>
                    <div className="col text-center">
                        <img className="w-50 mx-auto d-block rounded proj-pic" src={img} alt="project"></img>
                        <br></br>
                        <p><i>Screenshot from the project</i></p>
                        <a href={link} className="p-2 mt-5 mb-5 benji-link"  target="_blank" rel="noreferrer">Check it out</a>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    )
};