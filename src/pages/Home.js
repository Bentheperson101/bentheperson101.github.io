import ContentCard from "../Components/ContentCard";

const Home = () => {

    return (
        <div className="p-3 page-container">
            <ContentCard
                title="Welcome!"
                content={
                    <div className="p-3 content">
                        <img alt="Benjamin Kosty" src="images/home-profile.jpg"></img>
                        <div className="pe-3">
                            <h5>About the Site</h5>
                            <p>This is my personal website used to highlight my professional history, projects, and ability to use React  
                            as well as other web development tools. It will be expanded upon and updated as time goes on with 
                            more experience, more projects, and overall being a cooler website with fancier features.</p>
                            <br></br>
                            <p>Here's what each page tab contains:</p> 
                            <ul>
                                <li><b className="text-decoration-underline">About Me</b> - who I am, what tech I know, my job history, my education history, and a link to my resume.</li>
                                <li><b className="text-decoration-underline">Works</b> - projects I have completed.</li>
                            </ul>
                            <br></br>
                            <h5>I Am Currently</h5>
                            <p>Looking for a new full time position in software development/web development/similar. I am also working on a MERN social media project I did 
                                for my last semester in college: <a href="https://www.guilddotlfg.com/">guilddotlfg.com</a></p>
                            <br></br>
                            <h5>Note</h5>
                            <p>I put together this website using my HTML, CSS, REACT, and JavaScript knowledge but I built it live following YouTube videos and other online tutorials.
                            That means it may not be perfect. I was not taught how to put up live websites in class or deploy
                            react websites.</p>
                            <br></br>
                        </div>
                        <h5>Website Updates</h5>
                        <ul>
                            <li><b>January-5-2025</b> - Updated with a new project in the works page and other updates related to my graduation.</li>
                            <li><b>August-14-2024</b> - Added picture of me. Adjustments to CSS, some optimization, and other tinkering.</li>
                            <li><b>August-13-2024</b> - Revised entire website from previous version.</li>
                        </ul>
                    </div>
                }
            />
        </div>
    )
};

export default Home;