import { runSaga } from 'redux-saga';
import { loadingCityWorker } from '../redux/sagas/locationSaga';
import * as api from '../api/location';

describe('Testing location saga', () => {
  test('should return city array', async () => {
    const dispatchedAction = [];
    const mokedCities = ['Minsk', 'Grodno'];
    api.getCityFetch = jest.fn(() => Promise.resolve(mokedCities));
    const fakeStore = {
      getState: () => ({ test: 'test' }),
      dispatch: (action) => dispatchedAction.push(action),
    };
    const country = { countryId: '5fe0a3148cb0a95cf5cccc07' };
    await runSaga(fakeStore, loadingCityWorker, country).done;
<<<<<<< HEAD
=======
    console.log('test 1: ', dispatchedAction);
>>>>>>> 516b6247991a7a4fc728272e6c48b97bbc1f2acb
    expect(api.getCityFetch.mock.calls.length).toBe(1);
  });
});
