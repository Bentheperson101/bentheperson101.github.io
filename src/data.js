import FactCard from "./Components/FactCard";
import LangBubble from "./Components/LangBubble";

export const worksInfo = [{
    id: 0,
    title: "e",
    summary: 'e'
}];

let today = new Date();
let dob = new Date("2001-08-19");
let age = Math.floor((today-dob)/(365.25*24*60*60*1000));

export const aboutMeCards = [{
    id: 0,
    title: "Who I Am",
    text: 
    <> 
        {/*<p>I'm Benjamin Kosty, here are some quick facts:</p>
        <div className="row">
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
                fact = "I have a love for creating  different things and problem solving."
            />
        </div>
        <br></br>*/}
        <p><h5>My Story:</h5>Back in high school I was unsure of my direction in life. I had originally
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
    </>
}, {
    id: 1,
    title: "Interests",
    text: 
     <>
        <LangBubble
            langs= {["Gaming", "Anime", "Manga", "Hiking", "Camping", "Exploring", "Music", "Creating"]}
        />
        <br></br>
     </>
}, {
    id: 2,
    title: "Tech",
    text: 
     <>
        <h5 className="mb-3">Tech I Am Comfortable With:</h5>
        <LangBubble
            langs= {["HTML", "CSS", "React", "C#", "JavaScript", "VS Code", "GitHub", "Unity"]}
        />
        <h5 className="mb-3">Tech I Am Familiar With:</h5>
        <LangBubble
            langs= {["C++", "Bootstrap5", "XAMPP", "MongoDB", "SQL", "PHP", "Python", "Java"]}
        />
        <br></br>
     </>
}, {
    id: 3,
    title: "Job History",
    text: 
        <>
            <h4>Target</h4>
            <p><b>September 2020 - Present</b></p>
            <p>I fulfill online orders for customers as a fulfillment expert. I search, retrieve, 
            and stow a batch of 23 - 36 unique items from the sales floor and backroom in under 90 minutes. 
            I have to be able to search well, utilize the tools given, analyze the item data to be able to find the items.
             There are times when items are not located in time or at all and must be canceled from the order. I am also an
              active trainer there for new fulfillment employees.</p>
        </>
}, {
    id: 4,
    title: "Education",
    text: 
     <>
        <h4>Wilmington University</h4>
        <p><b>January 2022 - Present</b></p>
        <p><b>Bachelors of Computer Science</b></p>
        <p>I attend online, through Guild and my job at target. I have taken all sorts of 
            classes, but the relevant ones are: Web Design and Development, Computer Science 
            Fundamentals, Computer Architecture, PHP Application Development, Fundamentals of O-O 
            Programming, Microsoft .Net I & II, JavaScript, Database Foundations, Innovative Web Development, 
            O-O Systems Analysis and Design, Computer Hardware and Operation, Networks and Communications, 
            Big Data and Visualization, Ethics for Computer Professionals, Fundamentals of Cybersecurity, 
            Introduction to Programming with Python, Java I, Intro to Artificial Intelligence, and Intro to Game Programming.</p>
     </>
}, {
    id: 5,
    title: "Resume",
    text: 'link here idk'
}];
