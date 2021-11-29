function fetchData(){
    fetch("http://phreviewer-api.herokuapp.com/cse/english/limit?count=10")
    .then(respone =>{
       return respone.json();
    })
    .then(data=> {
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    })
    
}
fetchData();