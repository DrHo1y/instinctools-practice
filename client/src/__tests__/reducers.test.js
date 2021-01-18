import * as types from '../redux/types';
import { appReducer } from '../redux/reducers/appReducer';
import { catalogReducer } from '../redux/reducers/catalogReducer';

describe('Test app reducer', () => {
  it('Should return default state', () => {
    expect(appReducer(undefined, {})).toEqual({
      languge: 'EN',
      currency: 'USD',
      globalLoading: true,
      loading: false,
      msg: '',
      error: '',
    });
  });
  it('Should show global loader', () => {
    const type = { type: types.SHOW_LOADER };
    expect(appReducer(undefined, type)).toEqual({
      languge: 'EN',
      currency: 'USD',
      globalLoading: true,
      loading: false,
      msg: '',
      error: '',
    });
  });
  it('Should hide global loader', () => {
    const type = { type: types.HIDE_LOADER };
    expect(appReducer(undefined, type)).toEqual({
      languge: 'EN',
      currency: 'USD',
      globalLoading: false,
      loading: false,
      msg: '',
      error: '',
    });
  });
  it('Should return a message to the server', () => {
    const type = { type: types.SET_MESSAGE, payload: 'test' };
    expect(appReducer(undefined, type)).toEqual({
      languge: 'EN',
      currency: 'USD',
      globalLoading: true,
      loading: false,
      msg: 'test',
      error: '',
    });
  });
});
describe('Test catalog reducer', () => {
  it('Should return default state', () => {
    expect(catalogReducer(undefined, {})).toEqual({
      facilities: [],
    });
  });
  it('Should return a array with facilities to the server', () => {
    const type = { type: types.CATALOG_SEARCH_LOCATION, payload: { data: [1, 2, 3] } };
    expect(catalogReducer(undefined, type)).toEqual({
      facilities: [1, 2, 3],
    });
  });
});
