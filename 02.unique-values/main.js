const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
    ];

    const categories = ["added",...new Set(menu.map((item) => item.category))];
    console.log(categories);
    // The ... operator is used for destructuring of the object that have been created by the set() to the array
    const result = document.querySelector('.result');
    result.innerHTML = categories
    .map((args) => {
        return `<button>${args}</button>`;
    }).join('');
    // map -- to iterate through instances