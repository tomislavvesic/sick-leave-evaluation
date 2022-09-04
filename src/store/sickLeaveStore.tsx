import { Reducer } from 'react';
import { createStore } from 'redux'

import sickLeaveJsonData from '../sickLeaveRequests.json';
import { SickLeaveStateModel } from '../models/SickLeaveStateModel';

const sickLeaveInfo = {
    sickLeaveState: sickLeaveJsonData
}

const sickLeaveReducer: Reducer<any, any> = (state: SickLeaveStateModel = sickLeaveInfo, action: { type: string, id: number, description?: string, status?: string }) => {
    switch (action.type) {
        case "updateSickLeave":
            console.log(action.description)
            console.log(action.status)
            console.log(action.id)
            console.log(...state.sickLeaveState)
            console.log(sickLeaveInfo)
            console.log(sickLeaveInfo.sickLeaveState)
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