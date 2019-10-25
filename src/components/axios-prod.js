 import axios from 'axios';

 const instance = axios.create({
     baseURL: 'https://teacontents.firebaseio.com/'
 });

 export default instance;