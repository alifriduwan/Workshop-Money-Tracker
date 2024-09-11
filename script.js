// เข้าถึง Element
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dataTransection = [
    {id:1, text: "ค่าขนม", amount: -100},
    {id:2, text: "ค่าห้องพัก", amount: -3500},
    {id:3, text: "เงินเดือน", amount: +28000},
]

const transections = dataTransection;

function init(){
    transections.forEach(addDataToList)
    calculateMoney()
}

function addDataToList(transections){
    const symbol = transections.amount < 0 ? '-' : '+';
    const status = transections.amount < 0 ? 'minus' : 'plus';
    const item = document.createElement('li')
    result = formatNumber(Math.abs(transections.amount))

    item.innerHTML = `${transections.text} <span>${symbol} ${result}</span>
                <button class="delete-btn">x</button>`
    item.classList.add(status)
    console.log(item)
    list.appendChild(item)
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function calculateMoney(){
    const amounts = transections.map(transections => transections.amount)
    const total = amounts.reduce((result,item) => (result += item),0).toFixed(2)
    const income = amounts.filter(item => item > 0).reduce((result,item) => (result += item),0).toFixed(2)
    const expense = (amounts.filter(item => item < 0).reduce((result, item)=>(result += item),0)*-1).toFixed(2)
    

    balance.innerText = `฿` + formatNumber(total)
    money_plus.innerText = `฿` + formatNumber(income)
    money_minus.innerText = `฿` + formatNumber(expense)
}

init();