const member = [
    { name: "a", money: "500"},
    { name: "b", money: "400"},
    { name: "c", money: "5200"},
    { name: "d", money: "1200"}
];

const result = member.filter((element) => element.money > 450);

const result2 = result.map((element) => {return element.name});

console.log(result2);