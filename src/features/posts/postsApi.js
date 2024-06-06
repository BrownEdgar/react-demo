import axios from 'axios'

async function getAcyncPosts() {
  const response = await axios({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    url: 'posts',
    params: { _limit: 4 },
    timeout: 1000
  })
  return response.data;

}

export default getAcyncPosts