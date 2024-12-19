


let id = 0;
let arr = JSON.parse(localStorage.getItem("data")) || []; 

function handleClick() {
  let todo = document.getElementById('todo').value;

  if (!todo) {
    document.getElementById('errAndBlank').innerHTML = `Value should not be blank`;
    return; 
  } else {
    document.getElementById('errAndBlank').innerHTML = ''; 
  }
  id= id+1

  arr.push({ id, todo }); 

  let data = JSON.stringify(arr);
  localStorage.setItem("data", data);
  let getvalue = JSON.parse(localStorage.getItem("data"));

  let getTbody= document.getElementById('tbody')


  getvalue.forEach((e)=>{
      getTbody.innerHTML+=`
  <tr>
            <td>${e.id}</td>
            <td><input type="checkbox" id="check-box" /></td>
            <td>${e.todo}</td>
            <td><button id="edit">Edit</button></td>
            <td><button id="delete">Delete</button></td>
          </tr>
  
  
  
  
  
  `
  })

}

