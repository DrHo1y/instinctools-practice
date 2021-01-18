import axios from 'axios';
import * as api from '../api/sign';

jest.mock('axios');

describe('API testing', () => {
  let response;
  let token;
  beforeEach(() => {
    token = 'Bearer wejh3ij23jrifoifj230rf23-/3j-2323d';
    response = {
      data: { token },
    };
  });

  test('shoud return authorization token from server', () => {
    axios.get.mockReturnValue(response);
    return api.authFetched().then((data) => {
      expect(data.token).toEqual(token);
    });
  });
});
