import { body } from 'express-validator';
import { FACILITY_CREATE, FACILITY_CREATE_CLICK } from '../types';

export const createFacilityClickAction = (form) => ({ type: FACILITY_CREATE_CLICK, form });
export const createFacilityAction = (payload) => ({ type: FACILITY_CREATE, payload });
