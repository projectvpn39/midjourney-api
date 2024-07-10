//can use bootstrip library for more usage
// https://getbootstrap.com/docs/5.3/getting-started/introduction/

import { useState } from "react";

// import { Fragment } from "react"; //don't need
// import { MouseEvent } from "react";

// {items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //hook
  const [selectedIndex, setselectedIndex] = useState(-1);

  //   items = [];
  //but in jsx, we don't have a for loop, but we can change the format of it instead
  //   items.map(item => <li>{item}</li>)
  //but this can not be directly use in jsx

  //condition ?
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //same can not directly use

  //use this way:
  //   const message = items.length === 0 ? <p>No item found</p> : null;
  //better one:
  const message = items.length === 0 && <p>No item found</p>;
  //or by function
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };

  //event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {message}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            onClick={() => {
              setselectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
