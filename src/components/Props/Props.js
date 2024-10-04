import "./Props.scss";

function Props(props) {
  return (
    <>
      <h1 className="props">{props.text}</h1>
      <h5 className="props">{props.text2}</h5>
    </>
  );
}

export default Props;
