let buttons = document.getElementsByClassName('button');
let arr = [...buttons];

let theme = window.localStorage.getItem('theme');

arr.forEach((element, index) => {
    element.addEventListener('click', () =>{
        element.style.opacity = '1';
        
        arr
           .filter(function (item){
            return item != element;
        })
           .forEach((item) => {
            item.style.opacity = '0';
        });
    });
});

let screen = document.getElementById('result');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'RESET'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screenValue = eval(screenValue);
            screen.value = eval(screenValue);
        }
        else {
            if (buttonText == 'DEL'){
                buttonText = ""
                screenValue = screenValue.slice(0,-1);
                screen.value = screenValue;
            }
            else{
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }
    })
};

let switches = document.getElementsByClassName('button')

for (let i of switches){
    i.addEventListener('click', function() {
        let theme = this.dataset.theme;
        console.log(theme);
        SetTheme(theme);
    })
}

function SetTheme(theme){
    if (theme == 'theme1'){
        document.getElementById('switcher-id').href = './theme1.css';
    }
    else if (theme == 'theme2'){
        document.getElementById('switcher-id').href = './theme2.css';
    }
    else if (theme == 'theme3'){
        document.getElementById('switcher-id').href = './theme3.css';
    }
}