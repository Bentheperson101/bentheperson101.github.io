import PageHeader from "../Components/PageHeader";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {
    return (
        <div>
            <PageHeader 
                title="My Projects" 
                desc="All the projects I made (that I am happy with sharing)" 
            />
            <ProjectCard
                title="My First Game"
                desc="I made my first game in unity for a game development class I took as a free elective. It's made
                with free assets and my own code. [FINISH WRITING]"
                img="https://img.itch.zone/aW1hZ2UvMjY2ODAyNS8xNTkxMDE5OC5wbmc=/original/1tVSv4.png"
                link="https://bentheperson101.itch.io/knights-last-stand"
            />
            <ProjectCard
                title="This Website"
                desc="I learned how to write HTML, CSS, JavaScript, and some JSX with react in different courses.
                I also learned some things about backend, but this website does not really require it, and I am still
                learning how to set that up with a live website. I will likely have an example on this site once I do.
                 [FINISH WRITING]"
                img="website code.png"
                link=""
            />
        </div>
    )
};

export default Projects;