import { Reducer } from 'react';
import { createStore } from 'redux'

import sickLeaveJsonData from '../sickLeaveRequests.json';
import { SickLeaveStateModel } from '../models/SickLeaveStateModel';
import { SickLeaveObjectModel } from '../models/SickLeaveActionModel';

const sickLeaveInfo = {
    sickLeaveState: sickLeaveJsonData
}

const sickLeaveReducer: Reducer<any, any> = (state: SickLeaveStateModel = sickLeaveInfo, action: SickLeaveObjectModel) => {
    switch (action.type) {
        case "updateSickLeave":
            return {
                ...state,
                sickLeaveState: state.sickLeaveState.map((sickLeaveObject, i) =>
                    (i + 1) === action.id ?
                        { ...sickLeaveObject, description: action.description, status: action.status } : sickLeaveObject
                )
            }
        default:
            return state
    }
}

const store = createStore(sickLeaveReducer)

export default store