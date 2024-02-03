console.log("hi");
// document.getElementsByClassName("keys")[3].addEventListener
// ("click", function() {alert("hi"); });
// console.log(parseInt("5") + parseInt("8"));
let key = document.getElementsByClassName("keytext");
var num_1 = "";
var num_2 = "";
var answer = "";
var operator;
// document.getElementsByClassName('answer_text')[0].innerHTML = "rohan";

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
                    // answer = parseInt(num_1) + parseInt(num_2);
                    break;
            
                case "-":
                    operator = "-";
                    // answer = parseInt(num_1) - parseInt(num_2);
                    break;

                case "*":
                    operator = "*";
                    // answer = parseInt(num_1) * parseInt(num_2);
                    break;

                case "/":
                    operator = "/";
                    // answer = parseInt(num_1) / parseInt(num_2);
                    break;
            }
            if (inner_text == "=") {

                switch (operator) {
                    case "+":
                        // operator = "+";
                        answer = parseInt(num_1) + parseInt(num_2);
                        break;
                
                    case "-":
                        // operator = "-";
                        answer = parseInt(num_1) - parseInt(num_2);
                        break;
    
                    case "*":
                        // operator = "*";
                        answer = parseInt(num_1) * parseInt(num_2);
                        break;
    
                    case "/":
                        // operator = "/";
                        answer = parseInt(num_1) / parseInt(num_2);
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

            // num_2 = num_1;
            num_1 = "";
        }
        // console.log(inner_text);
        // console.log(document.getElementsByClassName("answer_text").innerHTML);

        
        console.log(num_1);
        console.log(num_2);
        console.log(answer);

        // switch (inner_text) {
        //     case 0:
        //         num_1 += 0;
        //         break;
            
        //     case 1:
        //         num_1 += 1;
        //         break;
            
        //     case 2:
        //         num_1 += 2;
        //         break;
            
        //     case 3:
        //         num_1 += 3;
        //         break;
            
        //     case 4:
        //         num_1 += 4;
        //         break;
            
        //     case 5:
        //         num_1 += 5;
        //         break;
            
        //     case 6:
        //         num_1 += 6;
        //         break;
            
        //     case 7:
        //         num_1 += 7;
        //         break;
            
        //     case 8:
        //         num_1 += 8;
        //         break;
            
        //     case 9:
        //         num_1 += 9;
        //         break;
            
        //     case "+":
        //         num_1 += 6;
        //         break;
            
        //     case 0:
        //         num_1 += 0;
        //         break;
            
        //     case 0:
        //         num_1 += 0;
        //         break;

        //     case 0:
        //         num_1 += 0;
        //         break;

        //     case 0:
        //         num_1 += 0;
        //         break;

        //     case 0:
        //         num_1 += 0;
        //         break;
                
        //         default:
        //         break;
        // }

    });
}

