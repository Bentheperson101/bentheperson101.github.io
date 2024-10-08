import AboutMeCard from "../Components/AboutMeCard";
import ContentCard from "../Components/ContentCard";
import { useState } from "react";
import { aboutMeCards } from "../aboutMeData";


const AboutMe = () => {
    const [index, setIndex] = useState(0);

    function handleClick(buttonIndex) {
        if(buttonIndex !== index) {
            setIndex(buttonIndex);
        }
    }

    function expand(selectedIndex) {
        setIndex(selectedIndex);
    }


    const listTabs = aboutMeCards.map(card=>
        <button className={card.id === index ? "selected-tab-list-item my-4 p-2 text-nowrap mx-auto" : "tab-list-item my-4 p-2 text-nowrap mx-auto"} onClick={() => handleClick(card.id)}>{card.title}</button>
    )

    const listCards = aboutMeCards.map(card =>
        <div className="row" style={{height: "100%"}}>
            <div className="col about-card p-3">
                <AboutMeCard
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    isActive={index===card.id}
                    expand={() => expand(card.id)}
                />
            </div>
        </div>
    )

    return (
        <>
            <div className="desktop-only page-container p-3">    
                <ContentCard
                    title=""
                    content={
                        <div className="row" style={{height: "100%", width:"100%"}}>
                            <div className="col-3 py-5 tab-list">
                                {listTabs}
                            </div>
                            <div className="col-9 about-card">
                                <AboutMeCard
                                    title={aboutMeCards[index].title}
                                    subtitle={aboutMeCards[index].subtitle}
                                    text={aboutMeCards[index].text}
                                />
                            </div>
                        </div>}
                />
            </div>
            <div className="tablet-mobile page-container p-3">
                {listCards}
            </div>
        </>
        
    )
};

export default AboutMe;