const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      // button is black when className = "selected"
      className={buttonText === reqType ? "selected" : null}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
