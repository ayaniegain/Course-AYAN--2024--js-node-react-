import './App.css'
import Greet from './components/Greet'
import PersonList from './components/PersonList'

function App() {

  let listOfPerson=[{
    fname:"ayan",
    lname:"biswas"
  },{
     fname:"Sayan",
    lname:"Das"
  }]

  return (
   <div>
   <Greet name="Mohok" messagecount={39} isLoggedIn={true}/>
   <PersonList person={listOfPerson}/>
   </div>
  )
}

export default App
