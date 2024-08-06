//import { useState } from "react";
import PageHeader from "../Components/PageHeader";
import HistoryCard from "../Components/HistoryCard";

const History = () => {
    return (
        <div>
            <PageHeader
                title="All About My Academic and Professional History"
                desc="Read about my professional life."
            />
            <div className="row mb-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <h4 className="m-4 text-center">Work Experience:</h4>
                    <HistoryCard 
                        title={"Target"}
                        when={"September 2020 - Present"}
                        desc={"I fulfill online orders for customers as a fulfillment expert. I search, retrieve, and stow" +
                            " a batch of 23 - 36 unique items from the sales floor and backroom in under 90 minutes. " +
                            "I have to be able to search well, utilize the tools given, analyze the item data to be able " +
                            "to find the items. There are times when items are not located in time or at all and " +
                            "must be canceled from the order. I am also an active trainer there for new fulfillment employees."
                        }
                    />
                    <HistoryCard 
                        title={"Subway"}
                        when={"2017 - 2019"}
                        desc={"I worked as a sandwich artist, cashier, cleaned the store, prepped food, handled cash, and" +
                            " sometimes handled closing. There were times when I would be the only person there and" +
                            " had to do everything myself. I also trained around three new employees."
                        }
                    />
                </div>
                <div className="col-lg-4">
                    <h4 className="m-4 text-center">Academic History:</h4>
                    <HistoryCard 
                        title={"Wilmington University"}
                        when={"January 2022 - Present"}
                        desc={"I attend online, through Guild and my job at target. I have taken all sorts of classes, but " +
                            "the relevant ones are: Web Design and Development, Computer Science Fundamentals, Computer Architecture" +
                            ", PHP Application Development, Fundamentals of O-O Programming, Microsoft .Net I & II, JavaScript, " +
                            "Database Foundations, Innovative Web Development, O-O Systems Analysis and Design, Computer Hardware " +
                            "and Operation, Networks and Communications, Big Data and Visualization, Ethics for Computer Professionals" +
                            ", Fundamentals of Cybersecurity, Introduction to Programming with Python, Java I, Intro to Artificial " +
                            "Intelligence, and Intro to Game Programming."
                        }
                    />
                    <HistoryCard 
                        title={"Spotswood High School"}
                        when={"2015 - 2019"}
                        desc={"High School where I grew up and my club teacher got me into Computer Science. I learned Visual" +
                            " Basic in an honors programming course, and Java in an AP Computer Science course."
                        }
                    />
                </div>
            </div>
        </div>
    )
};

export default History;