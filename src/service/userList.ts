import axios from "axios"

export const userListAPI: any = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
};

// import axios from 'axios';
// import LocalStorage from '../../common/localStorage';

// let res: any;

// class AuthService {

//     async userListAPI() {
//         try {
//             await axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
//                 res = response.data;
//             })
//                 .catch((error) => {
//                     res = error.response.data;
//                 });
//             return res;
//         } catch (e) {
//             return e;
//         }
//     }


// }

// export default AuthService;
