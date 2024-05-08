import PageHeader from "../Components/PageHeader";

const Projects = () => {
    return (
        <div>
            <PageHeader 
                title="My Projects" 
                desc="Here's all the projects I have done that I am happy with sharing" 
            />
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <div className="benji-border p-3">
                        <h2 className="p-3">Unity Project:</h2>
                        <hr></hr>
                        <p className="p-3">
                            <b>Summary:</b><br></br>
                            I made a game
                            <br></br>
                            <br></br>
                            <i>Check it out further on itch.io with the "Check it out" button at the bottom of this info box.</i>
                        </p>
                        <img className="w-50 mx-auto d-block rounded" src="https://img.itch.zone/aW1hZ2UvMjY2ODAyNS8xNTkxMDE5OC5wbmc=/original/1tVSv4.png" alt="article highlight"></img>
                            <br></br>
                            <p className="text-center"><i>Screenshot from the game</i></p>
                        <a href="https://bentheperson101.itch.io/knights-last-stand" className="p-2 mt-5 mb-5 benji-button">Check it out</a>
                        <p></p>
                    </div>
                    <br></br>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Projects;