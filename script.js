function solveQuadratic() {
    const aField = document.getElementById("a");
    const bField = document.getElementById("b");
    const cField = document.getElementById("c");
    const resultMessage = document.getElementById("result");

    const a = aField.value;
    const b = bField.value;
    const c = cField.value;

    if (!a || !b || !c) {
        resultMessage.innerHTML = "Hãy nhập vào a, b, c.";
        resultMessage.style.color = "red";
        // Highlight trường đầu vào không hợp lệ
        if (!(a)) {
            aField.classList.add("invalid");
        }
        if (!(b)) {
            bField.classList.add("invalid");
        }
        if (!(c)) {
            cField.classList.add("invalid");
        }
        return;
    }

    if (!isNumeric(a) || !isNumeric(b) || !isNumeric(c)) {
        resultMessage.innerHTML = "Hãy nhập a, b, c là số.";
        resultMessage.style.color = "red";
        // Highlight trường đầu vào không hợp lệ
        if (!isNumeric(a)) {
            aField.classList.add("invalid");
        }
        if (!isNumeric(b)) {
            bField.classList.add("invalid");
        }
        if (!isNumeric(c)) {
            cField.classList.add("invalid");
        }
    } else {
        const aNum = parseFloat(a);
        const bNum = parseFloat(b);
        const cNum = parseFloat(c);

        if(aNum==0){
            if(bNum==0){
                // if(cNum==0){
                //     resultMessage.innerHTML = "Phương trình có vô số nghiệm";
                //     resultMessage.style.color = "blue"; // Đổi màu về mặc định
                // }else{
                    resultMessage.innerHTML = "Phương trình vô nghiệm";
                    resultMessage.style.color = "blue"; // Đổi màu về mặc định
                // }
            }else{
                resultMessage.innerHTML = "Phương trình có nghiệm : x = " + (-cNum/bNum);
                resultMessage.style.color = "blue"; // Đổi màu về mặc định
            }
        }else{
            const discriminant = bNum * bNum - 4 * aNum * cNum;
            if (discriminant > 0) {
                const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
                const x2 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
                resultMessage.innerHTML = "Phương trình có 2 nghiệm: x1 = " + x1 + " và x2 = " + x2;
                resultMessage.style.color = "blue"; // Đổi màu về mặc định
            } else if (discriminant === 0) {
                const x = -bNum / (2 * aNum);
                resultMessage.innerHTML = "Phương trình có nghiệm kép: x = " + x;
                resultMessage.style.color = "blue"; // Đổi màu về mặc định
            } else {
                resultMessage.innerHTML = "Phương trình vô nghiệm";
                resultMessage.style.color = "blue"; // Đổi màu về mặc định
            }
        }
        
    }
}

function isNumeric(value) {
    return !isNaN(value) && isFinite(value);
}
// Xoá highlight khi trường đầu vào được focus
document.getElementById("a").addEventListener("focus", function() {
    this.classList.remove("invalid");
});

document.getElementById("b").addEventListener("focus", function() {
    this.classList.remove("invalid");
});

document.getElementById("c").addEventListener("focus", function() {
    this.classList.remove("invalid");
});