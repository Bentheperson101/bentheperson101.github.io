export default function PageHeader({ title, desc }) {
    return(
        <>
            <div className="row p-3 mb-4 benji-title">
                <div className="col-lg-12 p-3 text-center">
                    <h1>{title}</h1>
                    <h5>{desc}</h5>
                </div>
            </div>
        </>
    );
};