import AboutMeCard from "../Components/AboutMeCard";
import ContentCard from "../Components/ContentCard";
import { useState } from "react";
import { aboutMeCards } from "../data";


const AboutMe = () => {
    const [index, setIndex] = useState(0);

    function handleClick(buttonIndex) {
        if(buttonIndex !== index) {
            setIndex(buttonIndex);
        }
    }

    const listTabs = aboutMeCards.map(card=>
        <button className={card.id === index ? "selected-tab-list-item my-4 p-2 text-nowrap" : "tab-list-item my-4 p-2 text-nowrap"} onClick={() => handleClick(card.id)}>{card.title}</button>
    )

    return (
        <div className="">
            <ContentCard
                title=""
                content={
                    <div className="row mx-auto" style={{height: "100%"}}>
                        <div className="col-3 py-5 tab-list title-text">
                            {listTabs}
                        </div>
                        <div className="col-9 tablet-desktop about-card">
                            <AboutMeCard
                                text={aboutMeCards[index].text}
                            />
                        </div>
                        <div className="col-12 mobile-only about-card">
                            <AboutMeCard
                                text={aboutMeCards[index].text}
                            />
                        </div>
                    </div>
                }
            />
        </div>
    )
};

export default AboutMe;