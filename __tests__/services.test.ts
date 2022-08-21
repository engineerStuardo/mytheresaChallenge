import fetchMock from 'jest-fetch-mock';
import {
  getFamilyMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../src/services/services';

import {mockMoviesData} from '../__mocks__/mockMoviesData';

const moviesMock = {
  data: mockMoviesData,
};

beforeEach(() => {
  fetchMock.resetMocks();
});

test('Testing correct response for api call to getUpcomingMovies', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(moviesMock));

  const data = await getPopularMovies();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(data).toEqual(moviesMock);
});

test('Testing correct response for api call to getPopularUpcoming', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(moviesMock));

  const data = await getUpcomingMovies();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(data).toEqual(moviesMock);
});

test('Testing correct response for api call to getFamilyMovies', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(moviesMock));

  const data = await getFamilyMovies();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(data).toEqual(moviesMock);
});
