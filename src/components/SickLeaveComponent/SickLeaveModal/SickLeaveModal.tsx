import React, { useState } from "react";
import { useSelector } from 'react-redux';

import './SickLeaveModal.css';
import SelectedSickLeave from './SelectedSickLeave/SelectedSickLeave'
import SickLeaveColumn from '../shared/SickLeaveColumn/SickLeaveColumn';

const SickLeaveModal = ({ setIsOpen }: any) => {
    const [selectedSickLeaveId, setSelectedSickLeaveInfo] = useState(null);
    const sick_leave_state = useSelector((state: any) => state.sickLeaveState)

    const results: any[] = [];
    let sickLeaveObjectProp: any = null

    sick_leave_state.map((sickLeaveObject: any) => {
        return (
            results.push(
                <div key={sickLeaveObject.id} onClick={() => getClickedSickLeaveInfo(sickLeaveObject.id)}>
                    {!sick_leave_state.status && <SickLeaveColumn sickLeaveObject={sickLeaveObject} />}
                </div>
            )
        )
    });

    const getClickedSickLeaveInfo = (key: any) => {
        setSelectedSickLeaveInfo(key)
    };

    const getSelectedSickLeaveObject = () => {
        sick_leave_state.map((sickLeaveObject: any) => {
            if (sickLeaveObject.id === selectedSickLeaveId) {
                sickLeaveObjectProp = sickLeaveObject
            }
        })
    };

    getSelectedSickLeaveObject()
    return (
        <div className='popup'>
            <div className='darkBG' onClick={() => setIsOpen(false)} />
            <div className='position'>
                <div className="row h-100">
                    <div className="col-4 pe-0 h-100">
                        <div className="sick-leave-modal-item-list w-100 h-100">
                            <div className='row row-height'>
                                <div className='col-12 h-100'>
                                    {results}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 ps-0 h-100 sick-leave-modal-body">
                        {selectedSickLeaveId ? (
                            <div className="h-100">
                                <SelectedSickLeave sickLeaveObject={sickLeaveObjectProp} />
                            </div>
                        ) : (
                            <div className="align-items-center d-flex h-100">
                                <p className="align-items-center d-flex h-100 sick-leave-modal-no-info">No Sick Leave Info selected</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SickLeaveModal;
