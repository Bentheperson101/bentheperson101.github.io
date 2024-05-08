//import InterestCards from "../Components/InterestCards";
import PageHeader from "../Components/PageHeader";

const Home = () => {
    return (
        <div>
            <PageHeader
                title="Hello! I'm Benjamin"
                desc="Welcome to my website! Feel free to explore all the pages!"
            />
            <div className="row p-2">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h2 className="text-center">What I am Currently doing:</h2>
                    <h1>Please be advised: this site is still a work in progress!</h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
};

export default Home;