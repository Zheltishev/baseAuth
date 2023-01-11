import { createButtonSignIn } from '../buttons/buttonCreate';

export function headerContent() {
    const container = document.createElement('div');
    const row = document.createElement('div');
    const headerContent = document.createElement('div');
    const h3 = document.createElement('h3');

    container.classList.add('container', 'text-danger');
    row.classList.add('row');
    headerContent.classList.add(
        'header-content',
        'd-flex',
        'justify-content-between',
        'align-items-center',
        'p-3'
    );

    h3.textContent = 'Authorization';

    container.append(row);
    row.append(headerContent);
    headerContent.append(h3);
    headerContent.append(createButtonSignIn('Sign in', 'btn-danger'));

    return container;
}
