import { frame } from '../../components/frame/frame';
import { modalNotification } from '../../components/modal/modalNotification';

export function authorizedUser(response: any) {
    const modalFrame = document.querySelector('.modal-frame');
    const headerContent = document.querySelector('.header-content');
    const headerContentButton = headerContent!.querySelector('button');
    const authUser = document.createElement('div');
    const authUserName = document.createElement('div');
    const logout = document.createElement('i');

    modalFrame?.classList.add('hide');
    headerContentButton?.remove();
    authUser.classList.add('d-flex');
    authUserName.classList.add('cursor', 'px-2');
    logout.classList.add('bi', 'bi-box-arrow-left', 'cursor', 'px-2');

    headerContent?.append(authUser);
    authUser?.append(authUserName);
    authUser?.append(logout);

    authUserName.textContent = response.data.username;

    authUserName.addEventListener('click', () => {
        modalFrame?.classList.remove('hide');

        const newUserData = {
            username: response.data.username,
            password: 'none',
        };
        modalNotification(
            `token: ${response.data.message}`,
            'token',
            newUserData
        );
    });

    logout.addEventListener('click', frame);
}
