import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const reviews = useSelector((state) => state.reviews);
  const [contents, setContents] = useState("");
  const dispatch = useDispatch();

  const review = reviews.filter((review) => review.id === id)[0];

  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      <div>
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.body}
        <br />
        {todo.isDone.toString()}
        <br />
        <button onClick={() => navigate("/")}>이전 화면으로</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch({
              type: "ADD_REVIEW",
              payload: {
                id: todo.id,
                contents: contents,
              },
            });

            setContents("");
          }}
        >
          <input
            type="text"
            placeholder="댓글작성"
            name="contents"
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </form>
        <button type="submit">작성하기</button>
        <br />
        {review.id}
        {review.contents}
      </div>
    </div>
  );
};

export default Detail;
