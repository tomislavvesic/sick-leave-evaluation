import './SickLeaveColumn.css';

function SickLeaveColumn(_props: any) {
    const sickLeaveObject = _props?.sickLeaveObject

    return (
        <div className={`sick-leave-column sick-leave-column-${_props?.sickLeaveObject?.status} w-100 h-100 pt-2 pb-2`}>
            <div className="row d-flex align-items-center">
                <div className="col-5 ps-4 text-start">
                    <p className='mb-0'>{sickLeaveObject?.reason}</p>
                </div>
                <div className="col-7 text-center">
                    <p className='mb-0'>Due: {sickLeaveObject?.submittedDateTime}</p>
                </div>
            </div>
        </div>
    );
}

export default SickLeaveColumn;
