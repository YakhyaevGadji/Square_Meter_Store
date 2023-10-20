import singleItem from './../singleitem/singleitemContoller';

export default function() {
    document.querySelector('#app').innerHTML = '';
    singleItem();
}