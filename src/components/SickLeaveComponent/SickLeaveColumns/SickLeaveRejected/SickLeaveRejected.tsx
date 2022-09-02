import { useSelector } from 'react-redux';

import './SickLeaveRejected.css';
import SickLeaveColumn from '../../shared/SickLeaveColumn/SickLeaveColumn';

function SickLeaveRejected() {
    const sick_leave_state = useSelector((state: any) => state?.sickLeaveState)
    const results: any[] = [];

    sick_leave_state.forEach((sickLeaveObject: any, index: React.Key) => {
        if (sickLeaveObject?.status === 'rejected') {
            results.push(
                <div key={index}>
                    {!sick_leave_state.status && <SickLeaveColumn sickLeaveObject={sickLeaveObject} />}
                </div>
            )
        };
    });

    return (
        <div className="sick-leave-approved w-100 h-100">
            <div className='row row-height'>
                <div className='col-12 h-100'>
                    {results}
                </div>
            </div>
        </div>
    );
}

export default SickLeaveRejected;