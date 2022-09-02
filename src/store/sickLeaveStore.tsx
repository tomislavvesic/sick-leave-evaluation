import { Reducer } from 'react';
import { createStore } from 'redux'

import sickLeaveJsonData from '../sickLeaveRequests.json';
import { SickLeaveStateModel } from '../models/SickLeaveStateModel';

const sickLeaveInfo = {
    sickLeaveState: sickLeaveJsonData
}

const sickLeaveReducer: Reducer<any, any> = (state: SickLeaveStateModel = sickLeaveInfo, action: { type: string }) => {
    switch (action.type) {
        case "getSingleSickLeaveInfo":
            console.log('tests')
            let test = state.sickLeaveState
            return test
        default:
            return state
    }
}

const store = createStore(sickLeaveReducer)

export default store