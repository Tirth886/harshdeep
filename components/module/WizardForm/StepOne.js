const { useState } = React
function StepOne(props) {
    if (props.pIndex != props.currentStep) return null
    const [customerNumberAssignment, setCustomerNumberAssignment] = useState([
        {
            name: "Client Provided",
            id: "client_provided"
        },
        {
            name: "System Assigned",
            id: "system_assigned"
        }
    ])
    return (
        <div>
            <div className="form-group mb-3">
                <label for="business_name" className="form-label">Bussiness Name</label>
                <input type="text" placeholder="Bussiness Name" onChange={props.setWizardInformation} value={props.setWizardDetails.business_name} id="business_name" name="business_name" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label for="customer_number_assignment" className="form-label">Customer Number Assignment</label>
                <select id="customer_number_assignment" onChange={props.setWizardInformation} data-selected={props.setWizardDetails.customer_number_assignment} name="customer_number_assignment" className="form-control">
                    <option disabled>Choose option</option>
                    {
                        customerNumberAssignment.map(e => (
                            <option value={e.id} key={e.id}>
                                {e.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}