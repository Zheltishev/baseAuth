import { modalSignUp } from './modalSignUp';
import { modalSignIn } from './modalSignIn';

interface newUserData {
    username: string;
    password: string;
}

export function modalNotification(
    str: string,
    atr: string,
    userData: newUserData
) {
    const modalFrame = document.querySelector('.modal-frame');
    const modalWindow = document.createElement('div');
    const modalTop = document.createElement('div');
    const h3 = document.createElement('h3');
    const iconClose = document.createElement('i');
    const iconOpenModalSignUp = document.createElement('i');
    const iconOpenModalSignIn = document.createElement('i');
    const modalBottom = document.createElement('div');

    modalWindow.classList.add('modal-window', 'p-4');
    modalTop.classList.add(
        'modal-top',
        'd-flex',
        'justify-content-end',
        'mb-3'
    );
    iconClose.classList.add('bi', 'bi-x-circle');
    iconOpenModalSignUp.classList.add('bi', 'bi-x-circle');
    iconOpenModalSignIn.classList.add('bi', 'bi-x-circle');
    modalBottom.classList.add('modal-bottom');
    h3.textContent = str;

    modalFrame!.innerHTML = '';
    modalFrame!.append(modalWindow);
    modalWindow.append(modalTop);
    modalTop.append(iconClose);
    modalWindow.append(modalBottom);
    modalBottom.append(h3);

    if (atr === 'signUpTrue') {
        h3.classList.add('text-success');
    }

    if (atr === 'signUpFalse') {
        h3.classList.add('text-danger');
        modalTop.removeChild(iconClose);
        modalTop.append(iconOpenModalSignUp);
    }

    if (atr === 'signInFalse') {
        h3.classList.add('text-danger');
        modalTop.removeChild(iconClose);
        modalTop.append(iconOpenModalSignIn);
    }

    if (atr === 'token') {
        h3.classList.add('text-danger');
    }

    iconClose.addEventListener('click', () => {
        document.querySelector('.modal-frame')?.classList.add('hide');
    });

    iconOpenModalSignUp.addEventListener('click', () => {
        modalSignUp(userData.username, userData.password);
    });

    iconOpenModalSignIn.addEventListener('click', () => {
        modalSignIn(userData.username, userData.password);
    });

    return modalWindow;
}
