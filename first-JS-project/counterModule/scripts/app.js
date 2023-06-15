//set initial count
let count = 0;

const spanValue = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        switch (styles[1]) {
            case 'decrease':
                count--;
                break;
            case 'reset':
                count=0;
                break;
            case 'increase':
                count++;
                break;
        }
        changeColor(spanValue, count);
    })
})

function changeColor(element, count) {
    element.textContent = count;
    
    if(count > 0) {element.style.color = 'green';}
    else if(count < 0) {element.style.color = 'red';}
    else {element.style.color = '#222';}
}