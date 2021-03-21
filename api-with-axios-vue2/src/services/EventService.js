import axios from "axios";
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

//When request is about to go out,start the progress bar
apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})
//When response returns,finish the progress bar
apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page);
  },
  getEvent(id) {
    return apiClient.get('/events/' + id);
  },
  postEvent(event) {
    return apiClient.post('/events',event)
  },
};
