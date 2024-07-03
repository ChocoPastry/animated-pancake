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


const clr = (el) => {
    el.classList.add("clr");
    console.log(el.classList.contains("clr"));
    setTimeout(function () {
        el.classList.remove("clr")
    }, 200);
}

els.forEach((el) => {
    el.addEventListener("click", event => {
        el.classList.add("blink");
        setTimeout(function () {
            el.classList.remove("blink")
        }, 200);
        if (event.target.innerText == '=') {
            calc = eval(para);
            p.innerText = h2.innerText;
            h2.innerText = calc;
        }

        else if (event.target.innerText == "DELETE") {
            para = para.substring(0, para.length - 1);
            h2.innerText = para;
            clr(el);
        }

        else if (event.target.innerText == "CLEAR") {
            para = "";
            calc = 0;
            p.innerText = "";
            h2.innerText = ""
            clr(el);
        }

        else {
            h2.innerText += event.target.innerText;
            para += event.target.innerText
        }
    })
})