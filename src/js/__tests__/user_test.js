import getLevel from '../user';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel function status OK testing with mock-blanck', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 99,
  });

  expect(getLevel(1)).toMatch('Ваш текущий уровень: 99');
});

test('getLevel function status NOTOK testing with mock-blanck', () => {
  fetchData.mockReturnValue({
    status: '404',
  });

  expect(getLevel(1)).toMatch('Информация об уровне временно недоступна');
});
