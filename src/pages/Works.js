import ProjectCard from "../Components/ProjectCard";
import { worksInfo } from "../worksData";

const Works = () => {

    const listProjs = worksInfo.map(work =>
        <ProjectCard
            title={work.title}
            langs={work.langs}
            desc={work.desc}
            img={work.img}
            link={work.link}
        />
    )
    return (
        <div className="p-3 page-container">
            {listProjs}
        </div>
    )
};

export default Works;