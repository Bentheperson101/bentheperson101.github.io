import ContentCard from "../Components/ContentCard";

const Home = () => {

    return (
        <div className="p-3">
            <ContentCard
                title="Welcome"
                content={
                    <div className="p-3">
                        <p>This is my personal website used to highlight my professional history, projects, and ability to use React  
                        as well as other web development tools. It will be expanded upon and updated as time goes on with 
                        more experience, more projects, and overall being a cooler website with fancier features.</p>
                        <p>I put together this website and built it live following YouTube videos and other online tutorials.
                        That means it may not be perfect. I was not taught how to put up live websites in class or deploy
                        react websites.</p>
                        <br></br>
                        <h5>I Am Currently:</h5>
                        <p>Looking for an internship while finishing my degree and working at Target. Anything related to
                        software development or web development is the goal, I need experience.</p>
                        <br></br>
                        <svg fill="#313131" width="100" height="auto" viewBox="0 0 150 150">
                            {//<rect width="50" height="50" x="25px" y="25" style={{strokeWidth:"3", stroke:"red"}}></rect>
                            }
                            <polyline points="150 50, 140 50, 75 5, 10 50, 0 50, 10 50, 10 150, 0 150, 150 150, 140 150, 140 50" style={{fill:"none", strokeWidth:"5", stroke:"red"}}></polyline>
                        </svg>
                        
                        
                        <svg fill="#313131" width="100" height="100" >
                            <path d="M 85 35 50 5 15 35 25 25 25 75 75 75 75 25" style={{strokeWidth:"5", stroke:"red"}}></path>
                        </svg>
                    </div>
                }
            />
        </div>
    )
};

export default Home;