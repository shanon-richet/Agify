const fetchName = name => fetch('https://api.agify.io/?name='+name)

var input = document.querySelector('input')
var button = document.querySelector('button')

button.onclick= () => {
fetchName(input.value)
.then(response => response.json())
.then(json => {
 var ageMoyen= document.createElement('p')
ageMoyen.innerHTML= "Age: " + json.age;
document.body.appendChild(ageMoyen)
var countPeople = document.createElement('p')
countPeople.innerHTML = "Count: " + json.count;
document.body.appendChild(countPeople);
  console.log(json.age)
  console.log(json.count)
})
.catch(error => {
  console.log('There was an error!', error)
})
}