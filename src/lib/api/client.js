import axios from 'axios';

const client = axios.create();


  client.defaults.baseURL = 'http://localhost:8090';
 // client.defaults.timeout =3000;

// client.defaults.baseURL = 'http://10.10.40.150:8090';

// client.defaults.baseURL = window.location.origin;
//
//     client.defaults.withCredentials=true;

/*
  글로벌 설정 예시:

  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/'

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    },
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })
*/

export default client;
