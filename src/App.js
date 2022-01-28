import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once."); // 시작할 때 한번만 실행
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes."); // 시작할 때 + keyword 변화시 실행
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes."); // 시작할 때 + counter 변화시 실행
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes."); // 시작할때 + keyword, counter 둘 중 변화시 실행
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
