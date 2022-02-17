function WizardLayout(props) {
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <div className="card shadow-sm p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}