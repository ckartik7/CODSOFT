const output= document.querySelector('.output');
const result= document.querySelector('.result');
const keys= document.querySelectorAll('button');

keys.forEach(key=>{
    key.addEventListener('click', calculate)
})

function calculate(){
    let buttonText= this.innerText;
    
    if(buttonText=== 'AC'){
        output.textContent= '';
        result.textContent= '00'
        return;
    }

    if(buttonText=== 'DEL'){
        output.textContent= output.textContent.slice(0, -1);
        return;
    }

    if(buttonText=== '='){
        try {
            result.textContent= eval(output.textContent);
            return; 
        } catch (error) {
            result.textContent= 'ERROR';
            return;
        }
    }

    else{
        output.textContent+= buttonText;
        return;
    }
}