import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SelectedSickLeave.css';

function SelectedSickLeave(_props: any) {
    const sickLeaveObject = _props.sickLeaveObject

    const [sickLeaveDescription, setSickLeaveDescription] = useState('');
    const dispatch = useDispatch()

    const submitSickLeave = (status: string) => {
        dispatch({ type: 'updateSickLeave', id: sickLeaveObject.id, description: sickLeaveDescription, status: status })
    }

    return (
        <div className="sick-leave-selected w-100 h-100">
            <div className="row">
                <p><strong>Sick Leave Info</strong></p>
                <div className="col-6 ps-0">
                    <p>Reason: {sickLeaveObject.reason}</p>
                </div>
                <div className="col-6 pe-0">
                    <p>Start Date: {sickLeaveObject.startDate}</p>

                </div>
                <div className="col-6 ps-0">
                    <p>Submitted: {sickLeaveObject.submittedDateTime}</p>
                </div>
                <div className="col-6 pe-0">
                    <p>End Date: {sickLeaveObject.endDate}</p>
                </div>
            </div>
            <hr className='m-0' />
            <div className="row">
                <p><strong>User Info</strong></p>
                <div className="col-6 ps-0">
                    <p>First Name: {sickLeaveObject.patientInfo.firstName}</p>
                </div>
                <div className="col-6 pe-0">
                    <p>Last Name: {sickLeaveObject.patientInfo.lastName}</p>

                </div>
                <div className="col-6 ps-0">
                    <p>Gender: {sickLeaveObject.patientInfo.sexAtBirth}</p>
                </div>
                <div className="col-6 pe-0">
                    <p>Born: {sickLeaveObject.patientInfo.dateOfBirth}</p>
                </div>
            </div>
            <hr className='mt-0' />
            <div className="row">
                <div className="col-12">
                    <p className='mb-0 mt-1'><i>Add description before submitting</i> </p>
                    <textarea className='sick-leave-description mb-3 w-75'
                        value={sickLeaveDescription} name="sickLeaveDescription"
                        onChange={e => setSickLeaveDescription(e.target.value)}>
                    </textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-6 ps-0">
                    <button type="button" className="btn btn-danger w-75" onClick={() => submitSickLeave('rejected')}>Deny</button>
                </div>
                <div className="col-6 pe-0">
                    <button type="button" className="btn btn-success w-75" onClick={() => submitSickLeave('approved')}>Approve</button>
                </div>
            </div>
        </div>
    );
}

export default SelectedSickLeave;