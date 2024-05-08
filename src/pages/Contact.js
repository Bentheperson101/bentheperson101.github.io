import ContactList from "../Components/ContactList";
import PageHeader from "../Components/PageHeader";
import PageFooter from "../Components/PageFooter";

const Contact = () => {
    

    return (
        <div>
            <PageHeader
                title="Where to Contact Me"
                desc="You can reach out to me in whatever fashion you would like."
            />
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 benji-border p-3">
                    <h2 className="mt-2 mb-3">Here is my contact info: </h2>
                    <ContactList />
                </div>
                <div className="col-lg-2"></div>
            </div>
            <PageFooter />
        </div>
    )
};

export default Contact;