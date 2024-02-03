console.log("hi");
let key = document.getElementsByClassName("keytext");
var num_1 = "";
var num_2 = "";
var answer = "";
var operator;

for (let i = 0; i < key.length; i++) {
    key[i].addEventListener("click", function() {
        let inner_text = key[i].innerHTML;
        if (inner_text != "+" && inner_text != "-" && inner_text != "/" && inner_text != "*" && inner_text != "=" && inner_text != "C") {
            num_1 += inner_text;
            document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${num_1}</span>`;
        } else {
            if (inner_text != "="){
                num_2 = num_1;
            }
            switch (inner_text) {
                case "+":
                    operator = "+";
                    break;
            
                case "-":
                    operator = "-";
                    break;

                case "*":
                    operator = "*";
                    break;

                case "/":
                    operator = "/";
                    break;
            }
            if (inner_text == "=") {

                switch (operator) {
                    case "+":
                        answer = parseInt(num_1) + parseInt(num_2);
                        break;
                
                    case "-":
                        answer = parseInt(num_1) - parseInt(num_2);
                        break;
    
                    case "*":
                        answer = parseInt(num_1) * parseInt(num_2);
                        break;
    
                    case "/":
                        answer = parseInt(num_1) / parseInt(num_2);
                        break;
                    
                    default:
                        answer = num_1;
                        break;
                }
                
                document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${answer}</span>`;
            }

            if (inner_text == "C") {
                document.getElementsByClassName("answer")[0].innerHTML = `<span class='answer_text'>${0}</span>`;
                num_1 = "";
                num_2 = "";
                answer = "";
            }

            num_1 = "";
        }

        console.log(num_1);
        console.log(num_2);
        console.log(answer);
    });
}

