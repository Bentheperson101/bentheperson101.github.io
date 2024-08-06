import PageHeader from "../Components/PageHeader";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
    return (
        <div>
            <PageHeader 
                title="My Projects" 
                desc="All my projects that I am happy with sharing." 
            />
            <ProjectCard
                title="This Website"
                langs="HTML, CSS, JavaScript/JSX, React, Bootstrap 5, Visual Studio Code"
                desc="I learned how to write HTML, CSS, JavaScript, and JSX with react across different courses.
                I know about backend, but I am still learning about implementing it on a live website. Eventually
                an example will be on here. More details are on the Home page, so I will not explain further. Also, 
                the screenshot attached  is a bit old but serves its purpose."
                img="images/website code.png"
                link=""
            />
            <ProjectCard
                title="My First Game"
                langs="C#, Unity, Visual Studio 2022"
                desc="I made my first game in unity for a game development class I took as a free elective. I made it
                with free art, model, and sound assets from the unity store, but the functionality I wrote myself. It is
                a simple 3D, third-person, wave-based game where you fight for your survival and upgrade your character.
                I coded it in C#, so it gave me experience working with something that uses that language. 
                Other details can be found by clicking on the link to the game."
                img="https://img.itch.zone/aW1hZ2UvMjY2ODAyNS8xNTkxMDE5OC5wbmc=/original/1tVSv4.png"
                link="https://bentheperson101.itch.io/knights-last-stand"
            />
            <ProjectCard
                title="React Project for School"
                langs="HTML, CSS, JavaScript/JSX, React, Bootstrap 5, Visual Studio Code"
                desc="This was the final project for my Innovative Web Development course. It is not anything big, but it
                is a website that uses react and has different functionality. There is a list of favorite planets that 
                you can add to and remove from using a JSON object that is stored in a data file. Other pages just display
                information and use components. The logo is custom, and the planet list on the home page also uses a JSON
                object in a data file. The link brings you to a GitHub page with the code and some screenshots provided."
                img="images/react proj.png"
                link="https://github.com/Bentheperson101/React-school-project-code"
            />
            <ProjectCard
                title="PHP/SQL Assignment Example"
                langs="HTML, JavaScript, PHP, SQL, XAMPP"
                desc="This is a simple assignment, not a project. It is here to show I have used these languages and 
                tools before until I complete a full project with the languages. The assignment includes a login page
                and the functionality for retrieving  data from the database. The link brings you to a GitHub page with 
                the code and some screenshots provided."
                img="images/php img.png"
                link="https://github.com/Bentheperson101/PHP-SQL-school-assignment-example"
            />
        </div>
    )
};

export default Projects;