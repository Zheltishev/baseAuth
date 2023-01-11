import { headerContent } from '../header/headerContent';

export function frame() {
    const body = document.body;
    const modalFrame = document.createElement('div');
    const header = document.createElement('header');

    body.classList.add('bg-dark');
    modalFrame.classList.add('modal-frame', 'hide');

    body.innerHTML = '';

    body.append(modalFrame);
    body.append(header);
    header.append(headerContent());
}
