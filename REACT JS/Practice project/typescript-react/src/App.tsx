import './App.css'
import ButtonEvent from './components/ButtonEvent'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
   <Status status={"loading"}/>
   <Heading>
    this is heading
   </Heading>

   <Oscar>
    <Heading>this is Oscer </Heading>
   </Oscar>
   <br />
   <ButtonEvent handleClick={(event,id)=>{

    console.log("button clicked",event,id)
    
   }}/>
   <Container styles={{border:'1px solid black',padding :'1rem'}}/>
   </div>
  )
}

export default App
