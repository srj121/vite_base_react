import { useState } from 'react'
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    let items =['Delhi', 'Gujarat','indore'];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
return <div>
    <ListGroup  items={items} heading="Cities" OnSelectItem={handleSelectItem}/>
    {alertVisible && <Alert onclose={() => setAlertVisibility(false)}>MyAlert1</Alert>}
    <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
</div>
}

export default App
