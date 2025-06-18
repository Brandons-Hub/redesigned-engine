addEventListener('DOMContentLoaded', () =>{
    const btn = document.createElement('button');
    btn.textContent = 'Add Item';

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        console.log('Button Clicked!');
    });

    const list = document.createElement('ul');
    document.body.appendChild(list);

    const entry = document.createElement('li');
    entry.textContent = 'New Item';
    list.appendChild(entry);
});