import { modalNotification } from '../../components/modal/modalNotification';
import { authorizedUser } from './authorizedUser';
const axios = require('axios');

export function loginUser(username: string, password: string) {
    const modalFrame = document.querySelector('.modal-frame');
    const newUserData = {
        username: username,
        password: password,
    };

    return axios
        .post('http://localhost:8081/auth/signin', newUserData)
        .then(function (response: any) {
            if (response.data.atr === 'signInFalse') {
                const answer = modalNotification(
                    response.data.message,
                    response.data.atr,
                    newUserData
                );

                modalFrame?.append(answer);
            } else {
                authorizedUser(response);
            }
        });
}
