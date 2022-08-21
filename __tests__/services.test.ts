import fetchMock from 'jest-fetch-mock';
import {
  getFamilyMovies,
  getPopularMovies,
  getUpcomingMovies,
} from '../src/services/services';

const moviesMock = {
  data: [
    {
      adult: false,
      backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
      genre_ids: [28, 878, 53],
      id: 766507,
      original_language: 'en',
      original_title: 'Prey',
      overview:
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
      popularity: 8674.5,
      poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
      release_date: '2022-08-02',
      title: 'Prey',
      video: false,
      vote_average: 8.1,
      vote_count: 2665,
    },
  ],
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
