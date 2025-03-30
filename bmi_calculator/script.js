const form=document.querySelector('form')

form.addEventListener('submit' , function(sub){
    sub.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    const res=document.querySelector('#res')

    if(height===''|| height<0 || height===NaN){
        results.innerHTML="Please give a valid height"
    }
    else if(weight===''|| weight<0 || weight===NaN){
        results.innerHTML="Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span> Your bmi is ${bmi} </span>`
        if(bmi<18.5 ){
            res.innerText=" You are underweight"    
           }
           else if(bmi>=18.5 && bmi<25){
             res.innerText=" You have a healthy weight"
           }
           else if( bmi>=25 && bmi<30){
             res.innerText="You are overweight"
           }
           else{
            res.innerText="You are obese"
           }

     
    }
  
})