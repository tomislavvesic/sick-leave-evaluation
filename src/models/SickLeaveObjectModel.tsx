import { PatientInfoModel } from '../models/patientInfoModel';

export class SickLeaveObjectModel {
    id!: number
    patientInfo!: PatientInfoModel
    submittedDateTime!: string
    startDate!: string
    endDate!: string
    reason!: string
    status?: string
    description?: string
}