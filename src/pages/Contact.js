import ContactList from "../Components/ContactList";
import PageHeader from "../Components/PageHeader";

export default function Contact() {
    return (
        <div>
            <PageHeader
                title="Where to Contact Me"
                desc="You can reach out to me in whatever fashion you would like."
            />
            <div className="row mb-4">
                <div className="col-lg-2"></div>
                <div className="col-lg-8 benji-border p-3">
                    <h4 className="p-3">My contact info: </h4>
                    <hr></hr>
                    <ContactList />
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};