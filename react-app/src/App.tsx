import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // return <div><Message></Message></div> or
  // let items = ["New York", "Hong Kong", "Beijing", "Shanghai"];

  return (
    <div>
      {/* <ListGroup items={items} heading={"cities"} /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
