import api from '@providers/api.provider';

describe('tests resources [main]', () => {
  it('should return status code 200', async () => {
    await api.get('/').then((resp) => {
      expect(resp.status).toEqual(200);
    });
  });
});
