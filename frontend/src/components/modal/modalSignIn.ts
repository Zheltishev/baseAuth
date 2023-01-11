import { loginUser } from '../../modules/auth/loginUser';
import { modalSignUp } from './modalSignUp';

export function modalSignIn(
    usernameValue: string = '',
    passwordValue: string = ''
) {
    const modalFrame = document.querySelector('.modal-frame');
    const modalWindow = document.createElement('div');
    const modalTop = document.createElement('div');
    const h3 = document.createElement('h3');
    const iconClose = document.createElement('i');
    const modalBottom = document.createElement('div');
    const modalInputUsername = document.createElement('div');
    const modalInputPassword = document.createElement('div');
    const inputUsername = document.createElement('input');
    const inputPassword = document.createElement('input');
    const modalBottomButtons = document.createElement('div');
    const buttonSignUp = document.createElement('button');
    const buttonSignIn = document.createElement('button');

    modalWindow.classList.add('modal-window', 'p-4');
    modalTop.classList.add(
        'modal-top',
        'd-flex',
        'justify-content-between',
        'mb-3'
    );
    iconClose.classList.add('bi', 'bi-x-circle');
    modalBottom.classList.add('modal-bottom');
    modalInputUsername.classList.add('input-group', 'mb-3');
    modalInputPassword.classList.add('input-group', 'mb-3');
    inputUsername.classList.add('form-control');
    inputPassword.classList.add('form-control');
    modalBottomButtons.classList.add(
        'd-flex',
        'justify-content-between',
        'mt-4'
    );
    buttonSignUp.classList.add('btn', 'btn-danger');
    buttonSignIn.classList.add('btn', 'btn-success');

    modalFrame!.innerHTML = '';
    modalFrame!.append(modalWindow);
    modalWindow.append(modalTop);
    modalTop.append(h3);
    modalTop.append(iconClose);
    modalWindow.append(modalBottom);
    modalBottom.append(modalInputUsername);
    modalInputUsername.append(inputUsername);
    modalBottom.append(modalInputPassword);
    modalInputPassword.append(inputPassword);
    modalWindow.append(modalBottomButtons);
    modalBottomButtons.append(buttonSignUp);
    modalBottomButtons.append(buttonSignIn);

    h3.textContent = 'Sign in';
    inputUsername.setAttribute('placeholder', 'Username');
    inputUsername.setAttribute('type', 'text');
    inputUsername.value = usernameValue;
    inputPassword.setAttribute('placeholder', 'Password');
    inputPassword.value = passwordValue;
    buttonSignUp.textContent = 'Sign Up';
    buttonSignIn.textContent = 'Sign In';

    iconClose.addEventListener('click', () => {
        document.querySelector('.modal-frame')?.classList.add('hide');
    });

    buttonSignUp.addEventListener('click', () => {
        modalSignUp();
    });

    buttonSignIn.addEventListener('click', () => {
        loginUser(inputUsername.value, inputPassword.value);
    });
    return modalWindow;
}
