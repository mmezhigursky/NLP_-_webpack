
import { urlChecker } from "./validator.js";


document.getElementById('generate').addEventListener('click', textAnalysator);



async function textAnalysator(){

    let url =  document.getElementById('input_data').value;

    const validation = urlChecker(url);
    console.log(validation);

    if (validation===true){

    const response = await fetch('http://localhost:8080/anlize', {

        method: 'POST', 
    
        credentials: 'same-origin',
    
        headers: {
    
            'Content-Type': 'application/json',
        },
    
       // Body data type must match "Content-Type" header       
    
        body: JSON.stringify({data:url}), 
    
      });

      try {

        let newData = await response.json()
        window.gig =newData;
        console.log(newData);
        
        document.getElementById('result').innerHTML = 'Category: ' + newData.label;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + newData.confidence;
        document.getElementById('error').innerHTML = '';
  
        return newData;
  
      }catch(error) {
  
      console.log("error", error);
  
      }
    } 
    else{
      document.getElementById('error').innerHTML = 'error, please make sure the url looks like this <strong>https://google.com</strong>';
      document.getElementById('result').innerHTML = '';
        document.getElementById('confidence').innerHTML = '';
    }

  }
  

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value

//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/test')
//     .then(res => {
//         return res.json()
//     })
//     .then(function(data) {
        
//     })
// }

