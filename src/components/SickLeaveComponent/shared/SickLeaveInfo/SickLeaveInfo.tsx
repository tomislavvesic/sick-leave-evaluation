import { SickLeaveObjectModel } from '../../../../models/SickLeaveObjectModel';
import './SickLeaveInfo.css';

function SickLeaveInfo(_props: { sickLeaveObject: SickLeaveObjectModel; setIsOpen: any }) {
    const sickLeaveObject = _props?.sickLeaveObject
    const setIsOpen = _props?.setIsOpen

    return (
        <div>
            <button className="btn btn-danger w-100" onClick={() => setIsOpen(false)}>Back</button>
            <div className="row mt-4 mb-2">
                <div className="col-12">
                    <h5>{sickLeaveObject.patientInfo.firstName} {sickLeaveObject.patientInfo.lastName}</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>Born: <i>{sickLeaveObject.patientInfo.dateOfBirth}</i></p>
                </div>
                <div className="col-6">
                    <p>Gender: <i>{sickLeaveObject.patientInfo.sexAtBirth}</i></p>
                </div>
            </div>
            <hr />
            <div className='sick-leave-info ps-3'>
                <div className="row">
                    <div className="col-12">
                        <p>Reason: <i>{sickLeaveObject.reason}</i></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Submitted: <i>{sickLeaveObject.submittedDateTime}</i></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Start Date:  <i>{sickLeaveObject.startDate}</i></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>End Date: <i>{sickLeaveObject.endDate}</i></p>
                    </div>
                </div>
            </div>
            <div>
                {sickLeaveObject.description ? (
                    <div>
                        <hr className='mt-1' />
                        <p className='mb-0'>Description:</p>
                        <p className='mt-0'>{sickLeaveObject.description}</p>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default SickLeaveInfo;
