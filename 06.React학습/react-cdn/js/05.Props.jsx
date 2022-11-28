/****************************************************** 
[리액트 Props]
Props는 React 구성 요소에 전달되는 인수다.
Props은 HTML 속성을 통해 구성 요소에 전달된다.
props는 속성이다.
Props는 JavaScript의 함수의 인수 와 HTML의 속성과 동일함
Props를 컴포넌트로 보내려면 HTML 속성과 동일한 구문사용
******************************************************/

function Car(props) {
  return (
    <div>
      <h2>나의 차는 {props.brand}입니다!</h2>
    </div>
  );
}
function Car2(props) {
  return (
    <div>
      <h2>모델명은 {props.brand.model}이고 차색은 {props.brand.color}입니다!</h2>
      <img src="./images/ray.png" alt="레이" />
    </div>
  );
}

function Brand() {
  return (
    <div>
      <h1>당신의 차는 무슨차죠?</h1>
      <Car brand="기아레이" />
    </div>
  );
}

function Brand2() {
  const carInfo = { color: "라잇블루", model: "2022년형" };
  return (
    <div>
      <h1>더 자세히 말씀해주세요?</h1>
      <Car2 brand={carInfo} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<div><Brand /><Brand2 /></div>);
