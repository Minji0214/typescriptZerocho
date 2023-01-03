//
import * as React from "react"; //jsx쓰려면 꼭 필요하다.

const GuGuDan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  return (
    <>
      <div>
        {first} 곱하기 {second}
      </div>
      <form onSubmit={onSumbmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};
export default GuGuDan;
