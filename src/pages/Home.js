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
                    </div>
                }
            />
        </div>
    )
};

export default Home;