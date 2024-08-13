import ContentCard from "../Components/ContentCard";

const Home = () => {

    return (
        <div className="p-3">
            <ContentCard
                title="Welcome!"
                content={
                    <>
                        <div className="p-3 content">
                            <img alt="Benjamin Kosty" src="images/home-profile.png"></img>
                            <div className="pe-3">
                                <p>Please take a look around! Here's what each page tab contains:</p> 
                                <ul>
                                    <li><b className="text-decoration-underline">About Me:</b> who I am, what tech I know, my job history, my education history, and a link to my resume.</li>
                                    <li><b className="text-decoration-underline">Works:</b> projects I have completed.</li>
                                    <li><b className="text-decoration-underline">Contact:</b> where to reach me.</li>
                                </ul>
                                <br></br>
                                <h5>About the Site</h5>
                                <p>This is my personal website used to highlight my professional history, projects, and ability to use React  
                                as well as other web development tools. It will be expanded upon and updated as time goes on with 
                                more experience, more projects, and overall being a cooler website with fancier features.</p>
                                <br></br>
                                <p>I put together this website and built it live following YouTube videos and other online tutorials.
                                That means it may not be perfect. I was not taught how to put up live websites in class or deploy
                                react websites.</p>
                                <br></br>
                                <h5>I Am Currently</h5>
                                <p>Looking for an internship while finishing my degree and working at Target. Anything related to
                                software development or web development is the goal, I need experience.</p>
                                <br></br>
                            </div>
                        </div>
                        <div>
                        <svg width="300" height="auto" viewBox="0 0 150 150">
                                    <polyline points="15 50, 15 140, 5 140, 55 140, 55 80, 95 80, 95 140, 145 140, 135 140, 135 50" style={{fill:"none", strokeWidth:"10", stroke:"red"}}></polyline>
                                    <polyline points="145 57, 75 5, 5 57" style={{fill:"none", strokeWidth:"10", stroke:"red"}}></polyline>
                                </svg>
                        </div>
                    </>
                }
            />
        </div>
    )
};

export default Home;