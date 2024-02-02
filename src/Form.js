import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        {/* the useEffect to trigger the fetch runs every time a button is clicked. Refer to useEffect in APP.js  */}
      <Button
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType} 
      ></Button>
      <Button
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
      ></Button>
      <Button
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
      ></Button>
      <Button
        buttonText="todos"
        reqType={reqType}
        setReqType={setReqType}
      ></Button>
    </form>
  );
};

export default Form;
