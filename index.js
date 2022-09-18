const aInput = document.querySelector('#a')
const bInput = document.querySelector('#b')
const sumBtn = document.querySelector('#summ')
const restBtn = document.querySelector('#rest')
const multBtn = document.querySelector('#mult')
const delBtn = document.querySelector('#del')
const result = document.querySelector('#result')


const sum = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a + b;
}


sumBtn.onclick = sum;

const rest = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a - b;
}


restBtn.onclick = rest;

const mult = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a * b;
}


multBtn.onclick = mult;

const del = () => {
    const a = Number(aInput.value);
    const b = Number(bInput.value);

    result.innerHTML = a / b;
}


delBtn.onclick = del;

delBtn.addEventListener('click', () => {
    if (+b.value === 0) {
        alert('На 0 делить нельзя!');
    }
}
)

const form = document.querySelector('form')
const nameInput = form.querySelector('#name')
const signBtn = form.querySelector('#button')
const userInput = form.querySelector('#user')
const emailInput = form.querySelector('#email')
const passInput = form.querySelector('#pass')
const passrepInput = form.querySelector('#passrep')


signBtn.addEventListener('click', () => {
    if (!nameInput.value) alert('Введите имя');
    if (!userInput.value) alert('Введите имя пользователя');
    if (emailInput.value == '') alert('Введите адрес почты');
    /*if (emailInput.value.'@' < -1) alert('Введите верный адрес почты');*/
    if (passInput.value.lenght <= 8) alert('Пароль не может содержать меньше 8 символов');
    if (passrepInput.value != passInput.value) alert('Пароли не совпадают');
    else
        alert('Добро пожаловать,' + ' ' + nameInput.value + '!')
}
)

function change() {
    if (document.getElementById('selectID').value == 'GR')
        document.body.style.backgroundColor = "green";
    if (document.getElementById('selectID').value == 'YE')
        document.body.style.backgroundColor = "yellow";
    if (document.getElementById('selectID').value == 'BL')
        document.body.style.backgroundColor = "blue";
    if (document.getElementById('selectID').value == 'WH')
        document.body.style.backgroundColor = "white";

}











































/*<p class="signin button">
        <input type="submit" value="Sign up" />
    </p>*/
