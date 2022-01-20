import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  const author = "Corgi";
  const time = "Today at 4:45PM";
  const comment = "It's good man";

  return (
    <div className="ui container comments">
      <CommentDetail
        author={author}
        time={time}
        comment={comment}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Potto"
        time="Yesterday at 2:00PM"
        comment="Good guy!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Feem"
        time="Yesterday at 3:17PM"
        comment="It's great!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
