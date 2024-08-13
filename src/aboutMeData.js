import ItemBubble from "./Components/ItemBubble";
import InfoCard from "./Components/InfoCard";

let today = new Date();
let dob = new Date("2001-08-19");
let age = Math.floor((today-dob)/(365.25*24*60*60*1000));

export const aboutMeCards = [{
    id: 0,
    title: "Who I Am",
    subtitle: "I Love Building Things",
    text: 
    <> 
        <p>No matter where I am, if I am coding then I am enjoying my time.
            I love coding things, seeing them work, or sometimes seeing them not
            work and then fixing them. I enjoy generally enjoy creating things and
            seeing them to completion.
        </p>
        <br></br>
        <h5>Some fun facts</h5>
        <ul>
            <li>{"I am " + age + " years old and my birthday is on August 19th."}</li>
            <li>I will finish up my bachelors in Computer Science this December.</li>
            <li>I have a love for creating different things and problem solving.</li>
        </ul>
        <br></br>
        <h5>All the Things I Like</h5>
        <ItemBubble
            items= {["Manga", "Hiking", "Camping"]}
        />
        <ItemBubble
            items= {["Gaming", "Anime", "Traveling"]}
        />
        <ItemBubble
            items= {["Exploring", "Music", "Creating"]}
        />
        <br></br>
        <InfoCard
            title={"My Story"}
            subtitle={null}
            text={"Back in high school I was unsure of my direction in life. I had originally " +
                "planned to become an astronaut, but my grades were not good enough at the time and the " +
                "idea overwhelmed me. I had joined a club with my friends that was technology based, since " +
                "I had a bit of an interest in games and the idea of coding. We used that time to do whatever " +
                "projects the teacher overseeing gave us as well as mess around with unity on one of the computers " +
                "trying to make a silly 2D game. The teacher at one point recognized our interest in coding and " +
                "offered to place us into the honors programming course the following year. My friend and accepted " +
                "the offer, and I found my place after that. Eventually, it would lead me to getting a five on the " +
                "AP exam and going off to college to pursue computer science."}
            key={"story"}
        />
        <p>I have had a rough and bumpy journey, but I am finally
        nearing the end of my academic journey for the time being.</p>
        <br></br>
    </>
}, {
    id: 1,
    title: "Tech",
    subtitle: "The Current Heights of My Tech Knowledge",
    text: 
     <>
        <h5 className="mb-3"><b>Tech I Am Comfortable With:</b></h5>
        <ItemBubble
            items= {["HTML", "CSS", "React"]}
        />
        <ItemBubble
            items= {["C#", "GitHub", "Unity"]}
        />
        <ItemBubble
            items= {["JavaScript", "VS Code"]}
        />
        <br></br>
        <h5 className="mb-3"><b>Tech I Am Familiar With:</b></h5>
        <ItemBubble
            items= {["C++", "Bootstrap5", "XAMPP"]}
        />
        <ItemBubble
            items= {["MongoDB", "Python", "Java"]}
        />
        <ItemBubble
            items= {["SQL", "PHP"]}
        />
        <br></br>
     </>
}, {
    id: 2,
    title: "Jobs",
    subtitle: "Relevant Positions I Have Had",
    text: 
        <>
            <InfoCard
                title={"Target"}
                subtitle={"September 2020 - Present"}
                text={"I fulfill online orders for customers as a fulfillment expert. I search, retrieve, " +
                    "and stow a batch of 23 - 36 unique items from the sales floor and backroom in under 90 minutes. " +
                    "I have to be able to search well, utilize the tools given, analyze the item data to be able to find the items." +
                    "There are times when items are not located in time or at all and must be canceled from the order. I am also an" +
                    "active trainer there for new fulfillment employees."}
                key={"target"}
            />
        </>
}, {
    id: 3,
    title: "Education",
    subtitle: "Relevant Degrees and Certificates",
    text: 
        <>
            <InfoCard
                title={"Bachelors of Computer Science | Wilmington University"}
                subtitle={"January 2022 - Present | Expected Completion: December 2024"}
                text={"Relevant classes: PHP Application Development, Microsoft .Net I & " +
                    "II, JavaScript, Database Foundations, Innovative Web Development, O-O Systems Analysis " +
                    "and Design, Introduction to Programming with Python, Java I, Intro to Artificial " +
                    "Intelligence, and Intro to Game Programming."}
                key={"uni"}
            />
            <InfoCard
                title={"Undergrad Certificate - Java Programming | Wilmington University"}
                subtitle={"May 2024 - Present | Expected Completion: December 2024"}
                text={null}
                key={"java"}
            />
            <InfoCard
                title={"Undergrad Certificate - Microsoft.net Applications | Wilmington University"}
                subtitle={" Completed May 2024"}
                text={null}
                key={"dotnet"}
            />
        </>
}, {
    id: 4,
    title: "Resumé",
    subtitle: "Resumé Preview & Link",
    text: 
    <>
        <object className="tablet-desktop" data="resume/Benjamin Kosty - Resume.pdf" type="application/pdf" width="100%" height="70%" title="Resume PDF">
        </object>
        <br></br>
        <a href="resume/Benjamin Kosty - Resume.pdf" className="p-2 my-5 mx-auto benji-link"  target="_blank" rel="noreferrer">Check it out</a>
    </>
}];
