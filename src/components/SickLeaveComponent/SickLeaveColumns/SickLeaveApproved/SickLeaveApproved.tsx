import { useSelector } from 'react-redux';

import './SickLeaveApproved.css';
import SickLeaveColumn from '../../shared/SickLeaveColumn/SickLeaveColumn';
import { useState } from 'react';

import SickLeaveInfo from '../../shared/SickLeaveInfo/SickLeaveInfo'
import { SickLeaveStateModel } from '../../../../models/SickLeaveStateModel';
import { SickLeaveObjectModel } from '../../../../models/SickLeaveObjectModel';

function SickLeaveApproved() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSickLeaveId, setSelectedSickLeaveInfo] = useState<number | null>(null);
    const sickLeaveState = useSelector((state: SickLeaveStateModel) => state?.sickLeaveState)

    let sickLeaveObjectProp: SickLeaveObjectModel | null = null
    const results: any[] = [];

    sickLeaveState.forEach((sickLeaveObject: SickLeaveObjectModel, index: React.Key) => {
        if (sickLeaveObject?.status === 'approved') {
            results.push(
                <div key={index} onClick={() => getClickedSickLeaveInfo(sickLeaveObject.id)}>
                    <SickLeaveColumn sickLeaveObject={sickLeaveObject} />
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
    };

    getSelectedSickLeaveObject()
    return (
        <div className="sick-leave-approved w-100 h-100">
            <div className='row row-height'>
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

export default SickLeaveApproved;
