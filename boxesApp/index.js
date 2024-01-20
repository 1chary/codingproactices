const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  const name = `miniContainer ${className}`;
  return (
    <div className={name}>
      <p class="para"> {text} </p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxContainer">
      <Box className="yellow" text="small" />
      <Box className="blue" text="medium" />
      <Box className="pink" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
