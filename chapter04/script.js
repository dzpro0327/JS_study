for (let i = 0; true; i++) {
    const isContinue = confirm("계속 하시겠습니까?");
    
    if (!isContinue) {
        break;
    }

    alert('프로그램 종료');
}


let output = '';

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        output += '*';
    }

    output = "\n";
}

console.log(output);

