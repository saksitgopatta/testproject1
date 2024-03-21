const member = [
    { name: "a", money: "500"},
    { name: "b", money: "400"},
    { name: "c", money: "5200"},
    { name: "d", money: "1200"}
];

const isMoney = member.find((element) => element.money > 1000);

const isNameMoney = member.map((element) => {return element.name});

const DisplayMember = () =>{
    return console.log(`${isMoney.name}`) + console.log(isNameMoney);;
}

DisplayMember();