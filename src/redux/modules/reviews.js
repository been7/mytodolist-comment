import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    contents: "댓글 1",
  },
];

const reviews = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reviews;
