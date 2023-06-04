import './style.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';

/* it will initialize our app */
const app = initializeApp({
    databaseURL: 'https://todo-web-app-afe30-default-rtdb.asia-southeast1.firebasedatabase.app/',
});

/* get a database */
const database = getDatabase(app);

/* Collection */
const taskCollection = ref(database, "tasks");

const task = (<HTMLInputElement>document.querySelector('#task'));
const btn = (<HTMLButtonElement>document.querySelector('#btn'));

btn.addEventListener('click', () => {
    const val = task.value;

    /* push will insert a record into database */
    push(taskCollection, val);

    task.value = '';
});

onValue(taskCollection, (snapshot) => {
    console.log(snapshot.val());
});