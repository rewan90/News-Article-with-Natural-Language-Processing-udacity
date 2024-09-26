import { sendPostRequest } from '../src/client/js/formHandler';

import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('sendPostRequest', () => {
  it('sends a POST request with the correct data', async () => {
    const url = 'http://example.com/api/analyze';
    const data = { url: 'https://example.com' };
    axios.post.mockResolvedValue({ data: { score_tag: 'positive' } });

    await sendPostRequest(url, data);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(url, data);
  });
});

