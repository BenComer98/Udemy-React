import Button from "./components/Button";
import { GoBell } from 'react-icons/go';

const handleClick = (event) => {
  console.log('You clicked it!');
};

function App() {
  return <div>
    <div>
      <Button primary rounded onClick={handleClick}> 
        <GoBell />
        Primary
      </Button>
    </div>
    <div>
      <Button secondary>Secondary</Button>
    </div>
    <div>
      <Button success rounded outline>Success</Button>
    </div>
    <div>
      <Button warning outline>Warning</Button>
    </div>
    <div>
      <Button danger>Danger</Button>
    </div>
  </div>;
}

export default App;
