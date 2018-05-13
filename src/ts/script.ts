import { DomChanger } from './dom-changer';

const greetingsChanger = new DomChanger('#greetings');
greetingsChanger.replaceText('Lucas👍!');


const dateChanger = new DomChanger('.date');

const changeDate = () => {
    const date = new Date();
    let month: any = date.getMonth() + 1;
    if (month < 10) { month = '0' + month; }
    const day = date.getDate() < 10 ? ('0' + date.getDate()) : (date.getDate());
    const minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : (date.getMinutes());
    const seconds = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : (date.getSeconds());
    const hours = date.getHours() < 10 ? ('0' + date.getHours()) : (date.getHours());

    const stringDate = `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`
    dateChanger.replaceText(stringDate);
}

changeDate();

setInterval(changeDate, 1000);


