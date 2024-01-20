const Button = (props) => {
  //  Write your code here.
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <div className="container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button buttonText="Like" className="like" />
        <Button buttonText="Comment" className="comment" />
        <Button buttonText="Share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
