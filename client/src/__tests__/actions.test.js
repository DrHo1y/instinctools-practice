import * as types from '../redux/types';
import * as appActions from '../redux/actions/appAction';
import * as catalogActions from '../redux/actions/catalogAction';

describe('Testing app action creators', () => {
  it('Should return object with INITIAL type', () => {
    const expectedAction = { type: types.INITIAL };
    expect(appActions.initialApp()).toEqual(expectedAction);
  });
  it('Should return object with SHOW_LOADER type', () => {
    const expectedAction = { type: types.SHOW_LOADER };
    expect(appActions.showLoaded()).toEqual(expectedAction);
  });
  it('Should return object with HIDE_LOADER type', () => {
    const expectedAction = { type: types.HIDE_LOADER };
    expect(appActions.hideLoader()).toEqual(expectedAction);
  });
  it('Should return object with SET_MESSAGE type and message payload', () => {
    const expectedAction = { type: types.SET_MESSAGE, payload: 'test' };
    expect(appActions.setMessage('test')).toEqual(expectedAction);
  });
});

describe('Testing catalog action creators', () => {
  it('Should return object with CATALOG_SEARCH_LOCATION_CLICK type and location payload', () => {
    const expectedAction = { type: types.CATALOG_SEARCH_LOCATION_CLICK, location: 'Belarus' };
    expect(catalogActions.searchCatalogLocationClickAction('Belarus')).toEqual(expectedAction);
  });
  it('Should return object with CATALOG_SEARCH_LOCATION and payload with data from server', () => {
    const expectedAction = { type: types.CATALOG_SEARCH_LOCATION, payload: { data: [] } };
    const payload = { data: [] };
    expect(catalogActions.searcCatalogLocationAction(payload)).toEqual(expectedAction);
  });
});
