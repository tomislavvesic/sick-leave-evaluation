import React, { useState } from "react";

import './SickLeaveComponent.css';
import SickLeaveApproved from './SickLeaveColumns/SickLeaveApproved/SickLeaveApproved';
import SickLeavePending from './SickLeaveColumns/SickLeavePending/SickLeavePending';
import SickLeaveRejected from './SickLeaveColumns/SickLeaveRejected/SickLeaveRejected';

import SickLeaveModal from "./SickLeaveModal/SickLeaveModal";

function SickLeaveColumns() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="sick-leave-container">
            <div className="container-fluid pt-5 pb-5 h-100">
                {/* !TODO Should this button logic be seperated into new file? */}
                {isOpen && <SickLeaveModal setIsOpen={setIsOpen} />}
                <div className='row'>
                    <div className="col-md-12 text-center">
                        <button className='btn btn-success w-50' onClick={() => setIsOpen(true)}>
                            Evaluate Sick Leave
                        </button>
                    </div>
                </div>
                <div className='sick-leave-columns row'>
                    <div className='col-12 col-sm-4 h-100 mt-5'>
                        <SickLeavePending />
                    </div>
                    <div className='col-12 col-sm-4 h-100 mt-5'>
                        <SickLeaveApproved />
                    </div>
                    <div className='col-12 col-sm-4 h-100 mt-5'>
                        <SickLeaveRejected />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SickLeaveColumns;