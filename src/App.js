import './App.css';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import RegularList from './RegularList';
import { SplitScreen } from './SplitScreen';


const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: 'green'}}>{ name }</h1>
} 

const RightHandComponent = ({ message}) => {
  return <h1 style={{backgroundColor: 'red'}}>{ message }</h1>
}

const people = [{
  name: "John Doe", 
  age: 54, 
  hairColor: "brown",
  hobbies: ["swimming", "bicycling", "video games"]
}, {
  name: "Brenda Smith", 
  age: 33, 
  hairColor: "black",
  hobbies: ["golf", "mathematics", "video games"]
},{
  name: "Jane Garcia", 
  age: 27, 
  hairColor: "blonde",
  hobbies: ["biology", "medicine", "gymnastics"]
}]

const products = [{
  name: "Flat-Screen TV", 
  price: '$300', 
  description: "brown",
  rating: 4.5
},{
  name: "Basketball", 
  price: '$10', 
  description: "Just like pro use",
  rating:3.8
}];


function App() {
  return (
    <>
      <SplitScreen leftweight={1} rightweight={3}>
        <LeftHandComponent name="Saun"/>
        <RightHandComponent message="Hello"/>
      </SplitScreen>
      <RegularList 
        item={people}
        resourceName="person"
        itemComponent={<SmallPersonListItem/>}
      />
      <RegularList 
        items={people}
        resourceName="person"
        itemComponent ={<LargePersonListItem/>}
      />
    </>
  );
}

export default App;
