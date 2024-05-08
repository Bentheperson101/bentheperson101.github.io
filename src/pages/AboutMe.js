//import { useState } from "react";
import PageHeader from "../Components/PageHeader";

const AboutMe = () => {
    /*const [isAdding, setIsAdding] = useState(false);
    const [, updateState] = useState();

    function updateParentState() {
       updateState({});
    };*/

    return (
        <div>
            <PageHeader
                title="All About Me"
                desc="Here you can learn about my professional life and my interests!"
            />
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default AboutMe;