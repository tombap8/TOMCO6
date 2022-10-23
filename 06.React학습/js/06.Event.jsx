/******************************************************** 
HTML DOM 이벤트와 마찬가지로 React는 사용자 이벤트 사용가능함
React에는 HTML과 동일한 이벤트(클릭, 변경, 마우스오버 등)사용

[React 이벤트]
camelCase 구문으로 작성(소문자로 시작 중간단어마다 대문자시작)
예)  onclick -> onClick
React 이벤트 핸들러 : 중괄호 안에 작성
onClick="shoot()" -> onClick={shoot}
********************************************************/

function Ball(props) {
  return <img src={props.isrc} alt="공" />;
}

function Football() {
  const shoot = () => {
    alert("멋진 슛이야!");
  };

  const shoot2 = (ss) => {
    alert("공은 어디있는겨?" + ss);

    const ball = ReactDOM.createRoot(document.getElementById("ball"));
    ball.render(<Ball isrc={ss} />);
  };

  return (
    <div>
      <button onClick={shoot}>골을 팡~!하고 차봐!</button>
      <button onClick={() => shoot2("./images/ball.jpg")}>
        골을 팡~!하고 또차봐!
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);
