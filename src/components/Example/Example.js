import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import "./Example.scss";

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="example">
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Hi dude!
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}

export default Example;
