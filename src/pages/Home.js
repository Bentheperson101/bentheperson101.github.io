//import InterestCards from "../Components/InterestCards";
import PageHeader from "../Components/PageHeader";
import PageFooter from "../Components/PageFooter";

const Home = () => {
    return (
        <div>
            <PageHeader
                title="Hello! I'm Benjamin"
                desc="Welcome to my website! Feel free to explore all the pages!"
            />
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 benji-border p-3">
                    <h1 style={{color: "yellow"}}>Please be advised: this site is still a work in progress!</h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <PageFooter />
        </div>
    )
};

export default Home;