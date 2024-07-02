let p = document.createElement("p");
let h2 = document.createElement("h2");
let screen = document.querySelector("#screen");
let calc = 0;
let para = "";
let res = 0;
screen.append(p);
screen.append(h2);

let els = document.querySelectorAll(".el");

let arr = Array.from(els);

arr.forEach((el) => {
    el.addEventListener("click", event => {
        if (event.target.innerText == '=') {
            calc = eval(para);
            p.innerText = h2.innerText;
            h2.innerText = calc;
        }

        else if (event.target.innerText == "DELETE") {
            para = para.substring(0, para.length - 1);
            h2.innerText = para;
        }

        else if (event.target.innerText == "CLEAR") {
            para = "";
            calc = 0;
            p.innerText = "";
            h2.innerText = ""
        }

        else {
            h2.innerText += event.target.innerText;
            para += event.target.innerText
        }
    })
})