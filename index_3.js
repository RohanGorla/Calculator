console.log("hi");
let key = document.getElementsByClassName("keytext");
var num_1 = "";
var answer = 0;
var operator = "";

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", function() {
        let inner_text = key[i].innerHTML;
        if (inner_text != "+" && inner_text != "-" && inner_text != "/" && inner_text != "*" && inner_text != "=" && inner_text != "C") {
            num_1 += inner_text;
            document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${num_1}</span>`;
        } else {
            if (inner_text != "=" && inner_text != "C") {
                switch (operator) {
                    case "+":
                        operator = inner_text;
                        answer = answer + parseInt(num_1);
                        break;
                
                    case "-":
                        operator = inner_text;
                        answer = answer - parseInt(num_1);
                        break;

                    case "*":
                        operator = inner_text;
                        answer = answer * parseInt(num_1);
                        break;

                    case "/":
                        operator = inner_text;
                        answer = answer / parseInt(num_1);
                        break;
                    
                    default:
                        answer = parseInt(num_1);
                        operator = inner_text;
                        break;
                }

                num_1 = "";

            } else if (inner_text == "=") {
                switch (operator) {
                    case "+":
                        answer = answer + parseInt(num_1);
                        break;
                
                    case "-":
                        answer = answer - parseInt(num_1);
                        break;

                    case "*":
                        answer = answer * parseInt(num_1);
                        break;

                    case "/":
                        answer = answer / parseInt(num_1);
                        break;

                    default:
                        answer = num_1;
                        break;
                }

                num_1 = answer;
                operator = "";
                document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${answer}</span>`;
            } else if (inner_text == "C") {
                document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${0}</span>`;
                num_1 = "";
                answer = 0;
            }

        }

        console.log(num_1);
        console.log(answer);
    });
}

