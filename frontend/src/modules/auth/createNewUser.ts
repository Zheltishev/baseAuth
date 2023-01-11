import { modalNotification } from '../../components/modal/modalNotification';
const axios = require('axios');

export function createNewUser(username: string, password: string) {
    const modalFrame = document.querySelector('.modal-frame');
    const newUserData = {
        username: username,
        password: password,
    };

    return axios
        .post('http://localhost:8081/auth/signup', newUserData)
        .then(function (response: any) {
            const answer = modalNotification(
                response.data.message,
                response.data.atr,
                newUserData
            );

            modalFrame?.append(answer);
        });
}
