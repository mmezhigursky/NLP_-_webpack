
document.getElementById('generate').addEventListener('click', textAnalysator);


async function textAnalysator(){

    let url =  document.getElementById('input_data').value;

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
        
        document.getElementById('result').innerHTML = newData.label;    
  
        return newData;
  
      }catch(error) {
  
      console.log("error", error);
  
      }
  }
  

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        
    })
}

export { handleSubmit }

