
document.getElementById('generate').addEventListener('click', getWeatherData);

async function getWeatherData(){

    let url =  document.getElementById('url').value;

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

        const newData = await response.json();
  
        console.log(newData);
  
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
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }

