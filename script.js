let Treasure = [];//to keep money
let account = [];//to keep password
let history = [];
let mp = new Map();
let totalTreasure1 = 0;

const display1 = document.getElementById('done1');

const btn1 = document.getElementById('fstButton');
const start = document.getElementById('start');
//group treasure
const cagt = document.getElementById('cagt');
const sec = document.getElementById('sec');
const gt = document.getElementById('gt');
const tt = document.getElementById('tt');
const mt = document.getElementById('mt');
const it = document.getElementById('it');
const um = document.getElementById('um');
//group member
const gm = document.getElementById('gm');
const gmreg = document.getElementById('gmreg');
const login = document.getElementById('login');
const user = document.getElementById('user');
const ut = document.getElementById('ut');
const am = document.getElementById('am');

function start1() {
    btn1.style.display = 'block';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}


function createAccount() {
    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'block';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}//totaly done
const inpAmount = document.getElementById('amount');
let amount1;//amount-------------
inpAmount.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myVariable = inputValue;
    amount1 = parseInt(myVariable);
});
const inpassword = document.getElementById('password1');
let pass1;//amount-------------
inpassword.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myVariable = inputValue;
    pass1 = myVariable;
});
function done1() {
    const amount = document.getElementById('amount');
    const password1 = document.getElementById('password1');
    const secure = document.getElementById('secure');
    amount.style.display = 'none';
    password1.style.display = 'none';
    secure.style.display = 'none';

    Treasure.push(amount1);
    totalTreasure1 = totalTreasure1 + amount1;
    account.push(pass1);

    const heading = document.getElementById('display1');
    heading.style.display = 'block';
    const donebtn1 = document.getElementById('done1');
    donebtn1.style.display = 'block';
    heading.innerHTML = "YOUR ID NO: 0";
}//totaly done


const inpassword1 = document.getElementById('password2');
let pass11;//amount-------------
inpassword1.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myVariable = inputValue;
    pass11 = myVariable;
});
function secure1() {
    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'block';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}
function passing() {
    console.log(account[0]);
    console.log(pass11);
    if (account[0] == pass11) {
        sec.style.display = 'none';
        groupTreasure();
    }
    else prompt("Wrong Password");
}


function groupTreasure() {

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'block';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}

function totalTreasure() {
    const showindx0 = document.getElementById('showindx0');
    showindx0.innerHTML = totalTreasure1;

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'block';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}

function myTreasure() {

    const heading = document.getElementById('gt20');
    heading.innerHTML = Treasure[0];


    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'block';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}


let idit = 0;
const idno2 = document.getElementById('idno2');
idno2.addEventListener('input', (event) => {
    const idtemp = event.target.value;
    const myvalue = idtemp;
    idit = parseInt(myvalue);
});

function individualTreasure() {

    const gt30 = document.getElementById('gt30');
    const gt31 = document.getElementById('gt31');
    gt30.style.display = 'block';
    gt31.style.display = 'block';
    idno2.style.display = 'block';
    const gt33 = document.getElementById('gt33');
    gt33.style.display = 'none';
    const dgt32 = document.getElementById('dgt32');
    dgt32.style.display = 'none';

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'block';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}
function check() {
    const gt30 = document.getElementById('gt30');
    const gt31 = document.getElementById('gt31');
    gt30.style.display = 'none';
    gt31.style.display = 'none';
    idno2.style.display = 'none';
    const gt33 = document.getElementById('gt33');
    gt33.style.display = 'block';

    const dgt32 = document.getElementById('dgt32');
    dgt32.style.display = 'block';
    if (idit >= account.length) {
        dgt32.innerHTML = "Wrong ID NO";
    } else dgt32.innerHTML = Treasure[idit];
}

let idno3 = document.getElementById('idno3');
const use1 = document.getElementById('use1');
const insuf = document.getElementById('failed');
const umDone = document.getElementById('umDone');
const umrtb = document.getElementById('umrtb');
let amnt = 0;
idno3.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    amnt = parseInt(myvalue);
});

function useMoney() {
    idno3.style.display = 'block';
    use1.style.display = 'block';
    umrtb.style.display = 'block';
    insuf.style.display = 'none';
    umDone.style.display = 'none';

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'block';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}

function usefun() {
    idno3.style.display = 'none';
    use1.style.display = 'none';
    umrtb.style.display = 'none';
    for (let i = 0; i < Treasure.length; i++) {
        if (Treasure[i] < amnt) {
            insuf.style.display = 'block';
            umDone.style.display = 'none';
            break;
        } else if (i == Treasure.length - 1) {
            insuf.style.display = 'none';
            umDone.style.display = 'block';
            totalTreasure1 = totalTreasure1 - (amnt * (i + 1));
            for (let j = 0; j < Treasure.length; j++) {
                Treasure[j] = Treasure[j] - amnt;
            }
        }
    }
}



//group member
function groupMember() {
    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'block';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}

const gmamount = document.getElementById('gmamount');
const gmpassword = document.getElementById('gmpassword');
const gmregis = document.getElementById('gmregis');
const gmidno = document.getElementById('gmidno');

let gmam = 0, gmpass;
gmamount.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    gmam = parseInt(myvalue);
});
gmpassword.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    gmpass = myvalue;
});

function gmreg1() {
    gmamount.style.display = 'block';
    gmpassword.style.display = 'block';
    gmregis.style.display = 'block';
    gmidno.style.display = 'none';


    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'block';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}
function newReg() {
    gmamount.style.display = 'none';
    gmpassword.style.display = 'none';
    gmregis.style.display = 'none';
    gmidno.style.display = 'block';
    account.push(gmpass);
    Treasure.push(gmam);
    totalTreasure1 = totalTreasure1 + gmam;
    gmidno.innerHTML = account.length - 1;
}

const gmidn = document.getElementById('gmidn');
const gmlpass = document.getElementById('gmlpass');
const log = document.getElementById('log');
const result = document.getElementById('result');

let logcid = 0, logcpass;
gmidn.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    logcid = parseInt(myvalue);
});
gmlpass.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    logcpass = myvalue;
});

function gmlog() {

    gmidn.style.display = 'block';
    gmlpass.style.display = 'block';
    log.style.display = 'block';
    result.style.display = 'none';

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'block';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'none';
}
function logcheck() {
    if (account[logcid] == logcpass) {
        user1();
    } else {
        gmidn.style.display = 'none';
        gmlpass.style.display = 'none';
        log.style.display = 'none';
        result.style.display = 'block';
    }
}


function user1() {
    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'block';
    ut.style.display = 'none';
    am.style.display = 'none';
}

function userT() {
    const ut3 = document.getElementById('userTreasure');
    ut3.innerHTML = Treasure[logcid];


    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'block';
    am.style.display = 'none';
}


const idno4 = document.getElementById('idno4');
const adm = document.getElementById('adm');
const rbl = document.getElementById('rbl');
const last = document.getElementById('last');
let newam = 0;
idno4.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const myvalue = inputValue;
    newam = parseInt(myvalue);
});

function addMoney() {

    idno4.style.display = 'block';
    adm.style.display = 'block';
    rbl.style.display = 'block';
    last.style.display = 'none';

    btn1.style.display = 'none';
    //group treasure
    cagt.style.display = 'none';
    sec.style.display = 'none';
    gt.style.display = 'none';
    tt.style.display = 'none';
    mt.style.display = 'none';
    it.style.display = 'none';
    um.style.display = 'none';
    //group member
    gm.style.display = 'none';
    gmreg.style.display = 'none';
    login.style.display = 'none';
    user.style.display = 'none';
    ut.style.display = 'none';
    am.style.display = 'block';
}

function addmoneyDone() {
    idno4.style.display = 'none';
    adm.style.display = 'none';
    rbl.style.display = 'none';
    last.style.display = 'block';
    totalTreasure1 = totalTreasure1 + newam;
    Treasure[logcid] = Treasure[logcid] + newam;
}