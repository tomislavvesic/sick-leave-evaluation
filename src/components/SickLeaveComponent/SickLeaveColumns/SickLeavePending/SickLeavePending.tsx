import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './SickLeavePending.css';
import SickLeaveColumn from '../../shared/SickLeaveColumn/SickLeaveColumn';
import SickLeaveInfo from '../../shared/SickLeaveInfo/SickLeaveInfo';
import { SickLeaveObjectModel } from '../../../../models/SickLeaveObjectModel';
import { SickLeaveStateModel } from '../../../../models/SickLeaveStateModel';

function SickLeavePending() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSickLeaveId, setSelectedSickLeaveInfo] = useState<number | null>(null);
    const sickLeaveState = useSelector((state: SickLeaveStateModel) => state?.sickLeaveState)

    let sickLeaveObjectProp: SickLeaveObjectModel | null = null
    const results: any[] = [];

    sickLeaveState.forEach((sickLeaveObject: SickLeaveObjectModel, index: React.Key) => {
        if (!sickLeaveObject.status) {
            results.push(
                <div key={index} onClick={() => getClickedSickLeaveInfo(sickLeaveObject.id)}>
                    {<SickLeaveColumn sickLeaveObject={sickLeaveObject} />}
                </div>
            )
        };
    });

    const getClickedSickLeaveInfo = (key: number) => {
        setIsOpen(true)
        setSelectedSickLeaveInfo(key)

    };

    const getSelectedSickLeaveObject = () => {
        sickLeaveState.map((sickLeaveObject: SickLeaveObjectModel) => {
            if (sickLeaveObject.id === selectedSickLeaveId) {
                sickLeaveObjectProp = sickLeaveObject
            }
        })
    }

    getSelectedSickLeaveObject()
    return (
        <div className="sick-leave-pending w-100 h-100">
            <div className='row'>
                <div className='col-12 h-100'>
                    {sickLeaveObjectProp && isOpen ? (
                        <div className="h-100">
                            {<SickLeaveInfo sickLeaveObject={sickLeaveObjectProp} setIsOpen={setIsOpen} />}
                        </div>
                    ) : (
                        <>
                            {results}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SickLeavePending;