export default function ProjectCard({ title, langs, desc, img, link }) {
    return (
        <div className="row mb-4">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 benji-border p-3">
                <h4 className="p-3" >{title}</h4>
                <hr></hr>
                <p className="p-3">
                    <h5>Languages and Tools Used:</h5> <p>{langs}</p>
                    <br></br>
                    <h5>Summary:</h5>
                    {desc}
                    {link==="" ? null : <div><br></br><i>Look more into it with the "Check it out" button at the bottom of this info box.</i></div>}
                </p>
                <img className="w-50 mx-auto d-block rounded" src={img} alt="project"></img>
                <br></br>
                <p className="text-center"><i>Screenshot from the project</i></p>
                {link==="" ? null : <a href={link} className="p-2 mt-5 mb-5 benji-button">Check it out</a>}
                <p></p>
                <br></br>
            </div>
            <div className="col-lg-2"></div>
        </div>
    )
};