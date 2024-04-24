import _ from 'lodash';
import printMe from './printed';
// import './style.css';
// import Icon from './when-coding-is-criminal.jpg';
// import Data from './data.xml';
// import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    // // Add img to our existing div
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // console.log(Data);
    // console.log(Notes);

    return element;
}

document.body.appendChild(component());