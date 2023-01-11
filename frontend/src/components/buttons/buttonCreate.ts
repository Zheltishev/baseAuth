import { modalSignIn } from '../modal/modalSignIn';

export function createButtonSignIn(buttonText: string, buttonStyle: string) {
    const buttonSignIn = document.createElement('button');
    const modalFrame = document.querySelector('.modal-frame');

    buttonSignIn.classList.add('btn', buttonStyle);
    buttonSignIn.textContent = buttonText;
    buttonSignIn.addEventListener('click', () => {
        modalFrame?.classList.remove('hide');
        modalFrame?.append(modalSignIn());
    });

    return buttonSignIn;
}
