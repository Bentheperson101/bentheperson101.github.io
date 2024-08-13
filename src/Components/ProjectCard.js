export default function ProjectCards({ title, langs, desc, img, link }) {
    return (
        <div className="row mb-4">
            <div className="col-lg-6 mx-auto benji-border p-3">
                <h4 className="p-3" >{title}</h4>
                <hr></hr>
                <div className="row p-3">
                    <div className="col">
                        <h5>Tech Used</h5> <p>{langs}</p>
                        <br></br>
                        <h5>Summary</h5>
                        {desc}
                        <div className="tablet-mobile text-center">
                        <br></br>
                            <img className="w-50 mx-auto d-block proj-pic" src={img} alt="project"></img>
                            <br></br>
                            <p><i>Screenshot from the project</i></p>
                            <a href={link} className="p-2 mt-5 mb-5 benji-link"  target="_blank" rel="noreferrer">Check it out</a>
                            <br></br>
                        </div>
                    </div>
                    <div className="col text-center my-auto desktop-only">
                        <img className="w-50 mx-auto d-block proj-pic" src={img} alt="project"></img>
                        <br></br>
                        <p><i>Screenshot from the project</i></p>
                        <a href={link} className="p-2 mt-5 mb-5 benji-link"  target="_blank" rel="noreferrer">Check it out</a>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
};