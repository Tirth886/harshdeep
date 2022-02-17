const { useState } = React

function WizardForm(props) {
    const lastStep = 2
    const [currentStep, setCurrentStep] = useState(1)
    const [information, setInformation] = useState({
        business_name: "",
        customer_number_assignment: "",
        customer_number_label: "",
        notes: ""
    })


    function setWizardInformation(event) {
        const { name, value } = event.target
        console.log(name, value)
        setInformation({
            ...information,
            [name]: value
        })
    }

    function _next(e, step) {
        let currentStep = step
        currentStep = currentStep >= 1 ? lastStep : currentStep++
        setCurrentStep(currentStep)
    }

    function _previous(e, step) {
        let currentStep = step
        currentStep = currentStep-- <= 1 ? 1 : currentStep--
        setCurrentStep(currentStep)
    }

    function _submit(e) {
        const {
            business_name,
            customer_number_assignment,
            customer_number_label,
            notes
        } = information
        
        // Here WIll be Axios || Fetch || Any Request Method
        console.log({
            business_name,
            customer_number_assignment,
            customer_number_label,
            notes
        })
    }

    function submitButton(step) {
        let currentStep = step
        if (currentStep == lastStep) {
            return (
                <button
                    className="btn btn-success"
                    type="button" onClick={(e) => { _submit(e) }}>
                    Submit
                </button>
            )
        }
        return null
    }

    function nextButton(step) {
        let currentStep = step
        if (currentStep < lastStep) {
            return (
                <button
                    className="btn btn-primary"
                    type="button" onClick={(e) => { _next(e, currentStep) }}>
                    Next
                </button>
            )
        }
        return null
    }

    function nextPrevious(step) {
        let currentStep = step
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary me-2"
                    type="button" onClick={(e) => { _previous(e, currentStep) }}>
                    Previous
                </button>
            )
        }
        return null
    }
    const { buttonStyle } = useStyle()
    return (
        <WizardLayout>
            <StepOne pIndex={1} currentStep={currentStep} setWizardInformation={setWizardInformation} setWizardDetails={{ "business_name": information.business_name, "customer_number_assignment": information.customer_number_assignment }} />
            <StepTwo pIndex={2} currentStep={currentStep} setWizardInformation={setWizardInformation} setWizardDetails={{ "customer_number_label": information.customer_number_label, "notes": information.notes }} />
            <ButtonLayout style={buttonStyle}>
                {nextButton(currentStep)}
                {nextPrevious(currentStep)}
                {submitButton(currentStep)}
            </ButtonLayout>
        </WizardLayout>
    )
}   