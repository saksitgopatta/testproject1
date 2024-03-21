const takeOne = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            console.log("this is task 1");
            resolve();
        }, 500);
    });
};

const takeTwo = async () => {
    console.log("this is task 2");
};

const takeThree = async () => {
    await new Promise((resolve) => {
        setTimeout(function () {
            console.log("this is task 3");
            resolve();
        }, 1000);
    });
};

takeOne();
takeTwo();
takeThree();