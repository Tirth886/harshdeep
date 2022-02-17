function StepTwo(props) {
    if (props.pIndex != props.currentStep) return null
    const [customerNumberLabel, setCustomerNumberLabel] = useState([
        {
            name: "Policy Number",
            id: "policy_number"
        },
        {
            name: "Member Number",
            id: "member_number"
        },
        {
            name: "Claim Number",
            id: "claim_number"
        },
        {
            name: "Contract Number",
            id: "contract_number"
        },
        {
            name: "VIN",
            id: "vin"
        }
    ])
    const { textAreaStyle } = useStyle()
    return (
        <div>
            <div className="form-group mb-3">
                <label for="customer_number_label" className="form-label">Customer Number Label</label>
                <select id="customer_number_label" onChange={props.setWizardInformation} data-selected={props.setWizardDetails.customer_number_label} name="customer_number_label" className="form-control">
                    <option disabled>Choose option</option>
                    {
                        customerNumberLabel.map(e => (
                            <option value={e.id}>
                                {e.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="form-group mb-3">
                <label for="notes" className="form-label">Notes</label>
                <textarea id="notes" name="notes" placeholder="Notes" onChange={props.setWizardInformation} value={props.setWizardDetails.notes} style={textAreaStyle} rows={5} className="form-control" ></textarea>
            </div>
        </div>
    );
}