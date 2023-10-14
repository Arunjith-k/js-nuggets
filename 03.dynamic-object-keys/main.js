const person = {
    name:'jhon',
};
console.log(person.name);
person.age = 25;
console.log(person.age);

const items = {
    'featured-items' : ['item1', 'item2'],
};

console.log(items["featured-items"]);
console.log(person['name']);

let appState = 'loading';
appState = 'modified !';
const keyName  = 'laptop';
const app = {
    [appState] : true,
};

app[keyName] = 'orange';
console.log(app);


const state  = {
    loading : true,
    name : '',
    job:'',

};

function updateState(key,value){
    state[key] = value;
}

updateState('name','jhon');
updateState('job', 'Software Developer');
updateState('age', '25');
updateState('loading', false);
updateState('products', []);

state.age;
console.log(state);