const Projects = () => {
    return (
        <div>
            <div className="row p-3">
                <div className="col-lg-12 pt-3 text-center">
                    <h1>My Projects</h1>
                    <h5>Here's all the projects I have done that I am happy with sharing</h5>
                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <br></br>
                    <div className="border1 rounded p-3">
                        <p>
                        <h3 className="text-center text-decoration-underline">Unity Project:</h3>
                            <b>Summary:</b><br></br>
                            I made a game
                            <br></br>
                            <br></br>
                            <i>Check it out further on itch.io with the "Play it" button at the bottom of this info box.</i>
                        </p>
                        <img className="w-50 mx-auto d-block rounded" src="https://img.itch.zone/aW1hZ2UvMjY2ODAyNS8xNTkxMDE5OC5wbmc=/original/1tVSv4.png" alt="article highlight"></img>
                            <br></br>
                            <p className="text-center"><i>Screenshot from the game</i></p>
                        <a href="https://bentheperson101.itch.io/knights-last-stand" className=" rounded p-2 mt-5 mb-5 button1">Play it</a>
                    </div>
                    <br></br>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Projects;