//import InterestCards from "../Components/InterestCards";
import PageHeader from "../Components/PageHeader";
import FactCard from "../Components/FactCard";

const Home = () => {
    let today = new Date();
    let dob = new Date("2001-08-19");
    let age = Math.floor((today-dob)/(365.25*24*60*60*1000));

    return (
        <div>
            <PageHeader
                title="Hello, I Am Benjamin!"
                desc="Welcome to my website, feel free to explore all the pages!"
            />
            <div className="row mb-4">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 benji-border p-3">
                    <h4 className="p-3">What Is This site?</h4>
                    <hr></hr>
                    <div className="p-3">
                    <p>A personal website used to highlight my professional history, projects, and ability to use React  
                    as well as other web development tools. It will be expanded upon and updated as time goes on with 
                    more experience, more projects, and overall being a cooler website with fancier features.</p>
                    <p>I put together this website and built it live following YouTube videos and other online tutorials.
                    That means it may not be perfect. I was not taught how to put up live websites in class or deploy
                    react websites.</p>
                    <br></br>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 benji-border p-3">
                    <h4 className="p-3">Who Am I?</h4>
                    <hr></hr>
                    <div className="p-3">
                    <p>I'm Benjamin Kosty, here are some quick facts:</p>

                    <div className="row p-1">
                        <FactCard 
                            fact = {"I am " + age + " years old and my birthday is on August 19th."}
                        />
                        <FactCard 
                            fact = "I love computers, video games, anime, and adventures."
                        />
                        <FactCard 
                            fact = "I will finish up my bachelors in Computer Science this December."
                        />
                        <FactCard 
                            fact = "I have a love for creating things and problem solving."
                        />
                    </div>
                    <br></br>

                    <h5>I Am Currently:</h5>
                    <p>Looking for an internship while finishing my degree and working at Target. Anything related to
                    software development or web development is the goal, I need experience.</p>

                    <h5>Coding Languages and Tools I Am Familiar With:</h5>
                    <br></br>
                    <div className="row m-2 mb-4">
                        <div className="col-1 lang-bubble">C++</div>
                        <div className="col-1 lang-bubble">C#</div>
                        <div className="col-1 lang-bubble">Python</div>
                        <div className="col-1 lang-bubble">Java</div>
                        <div className="col-1 lang-bubble">JavaScript</div>
                        <div className="col-1 lang-bubble">JSX</div>
                        <div className="col-1 lang-bubble">SQL</div>
                        <div className="col-1 lang-bubble">PHP</div>
                    </div>
                    <div className="row m-2">
                        <div className="col-1 lang-bubble">HTML</div>
                        <div className="col-1 lang-bubble">CSS</div>
                        <div className="col-1 lang-bubble">React</div>
                        <div className="col-1 lang-bubble">Bootstrap5</div>
                        <div className="col-1 lang-bubble">XAMPP</div>
                        <div className="col-1 lang-bubble">VS Code</div>
                        <div className="col-1 lang-bubble">Unity</div>
                        <div className="col-1 lang-bubble">GitHub</div>
                    </div>
                    <br></br>

                    <p><h5>My Story:</h5>&nbsp;Back in high school I was unsure of my direction in life. I had originally
                    planned to become an astronaut, but my grades were not good enough at the time and the 
                    idea overwhelmed me. I had joined a club with my friends that was technology based, since
                    I had a bit of an interest in games and the idea of coding. We used that time to do whatever 
                    projects the teacher overseeing gave us as well as mess around with unity on one of the computers 
                    trying to make a silly 2D game. The teacher at one point recognized our interest in coding and 
                    offered to place us into the honors programming course the following year. My friend and accepted
                    the offer, and I found my place after that. Eventually, it would lead me to getting a five on the
                    AP exam and going off to college to pursue computer science.</p>

                    <p>I have had a rough and bumpy journey since leaving high school, but I am finally
                    nearing the end of my academic journey for the time being.</p>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
};

export default Home;