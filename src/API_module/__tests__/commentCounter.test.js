import mockcountComments from '../commentCounter.js';

const mockArrayComments = [
  { comment: 'Great, food', creation_date: '2023-01-07', username: 'Maria' },
  { comment: 'Yessssss, Nice taste', creation_date: '2023-01-07', username: 'Dario' },
  { creation_date: '2023-01-07', comment: 'Great', username: 'Jose' },
  { creation_date: '2023-01-07', comment: 'Great', username: 'Mauricio' },
  { username: 'Tomas', comment: 'Great, as usual', creation_date: '2023-01-07' },
];

describe('test function countComments', () => {
  test('count number of elemens in mockArrayComments', () => {
    expect(mockcountComments(mockArrayComments)).toBe(5);
  });
});