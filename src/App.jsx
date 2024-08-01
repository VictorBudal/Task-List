import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Trash,
  Check,
} from "./styles.js";

function App() {
  // Codigo JavaScript
  const [list, setList] = useState([
    { id: uuid(), task: "Go to work", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputChange(event) {
    console.log(event.target.value);
    setInputTask(event.target.value);
    console.log(list);
  }

  function clickedButton() {
    if(inputTask){
      setList([...list, { id: uuid(), task: inputTask, finished: false }]);
    }
    
  }

  function taskFinished(id) {
    const newList = list.map((item) =>
      item.id == id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function taskDelete(id) {
    console.log("I am here");
    const newList = list.filter((item) => item.id !== id);
    console.log("I am here");
    setList(newList);
  }
  // Return codigo HTML
  return (
    <Container>
      <ToDoList>
        <Input
          className="input-value"
          onChange={inputChange}
          placeholder="What do I have to do..."
          type="text"
        />
        <Button onClick={clickedButton}>To add</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => taskFinished(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => taskDelete(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>There are no items in the list</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
