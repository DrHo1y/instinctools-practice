import {
  FACILITY_ADD_ROOM_TO_FACILITY_CLICK,
  FACILITY_CREATE,
  FACILITY_CREATE_CLICK,
  FACILITY_LOAD_FOR_PARTNER,
  FACILITY_LOAD_FOR_PARTNER_LOADING,
  FACILITY_UPDATE,
  FACILITY_UPDATE_CLICK,
} from '../types';

export const createFacilityClickAction = (form) => ({ type: FACILITY_CREATE_CLICK, form });
export const createFacilityAction = (payload) => ({ type: FACILITY_CREATE, payload });
export const updateFacilityActionClick = (form) => ({ type: FACILITY_UPDATE_CLICK, form });
export const updateFacilityAction = (payload) => ({ type: FACILITY_UPDATE, payload });
export const getFacilityForPartnerLoadingAction = () => ({
  type: FACILITY_LOAD_FOR_PARTNER_LOADING,
});
export const getFacilityForPartnerAction = (payload) => ({
  type: FACILITY_LOAD_FOR_PARTNER,
  payload,
});
export const addRoomsToFacilityActionClick = (form) => ({
  type: FACILITY_ADD_ROOM_TO_FACILITY_CLICK,
  form,
});
