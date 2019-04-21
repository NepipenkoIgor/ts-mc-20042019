import './styles.css';
import {IListItem, menuList} from './data';

export function generateMenu(list: IListItem[]): string {
    let output: string = '<ul>';
    for (const item of list) {
        output += `<li><a class=${Array.isArray(item.items) ? 'title' : ''}>${item.title}</a>`;
        if (Array.isArray(item.items)) {
            output += generateMenu(item.items);
        }
        output += '</li>';
    }
    output += '</ul>';
    return output;
}


const element: HTMLDivElement | null = document.querySelector<HTMLDivElement>('.menu');
if (element) {
    element.innerHTML = generateMenu(menuList);

    element.onclick = (e: MouseEvent) => {
        const el: HTMLElement = e.target as HTMLElement;
        const {classList: cl}: { classList: DOMTokenList } = el;
        if (cl.contains('title')) {
            const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open');
        }
    };
}

