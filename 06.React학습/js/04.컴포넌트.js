
import Avengers from "./Avengers";

/************************************************* 
 * [ 리액트 컴포넌트 ]
   - 컴포넌트는 HTML 요소를 반환하는 함수

   { 특징 }
    1. 컴포넌트는 독립적이고 재사용 가능한 코드 비트
    JavaScript 함수와 동일한 목적을 제공하지만 분리되어 
    작동하고 HTML을 반환함

    2. 컴포넌트는 클래스 컴포넌트와 함수 컴포넌트 2가지임
    (우리는 함수 컴포넌트에 집중함!)

    이전 React 에서 주로 사용되었던 Class 컴포넌트는 
    React 16.8에 추가된 Hooks와 함께 더 이상 안쓰임!
    Function 컴포넌트를 사용하는 것을 추천함!
    참조용으로 클래스 컴포넌트는 설명할 것임

*************************************************/

/************************************************* 
    [첫 번째 컴포넌트 만들기]
    React 컴포넌트를 생성할 때 컴포넌트의 이름 은 
    반드시 대문자로 시작!

    [클래스 컴포넌트]
    클래스 컴포넌트에는 
    extends React.Component명령문이 
    포함되어야함. 
    React.Component에 대한 상속을 생성하고 
    컴포넌트에 React.Component의 기능에 대한 
    액세스 권한을 부여함.

    컴포넌트에도 메서드가 필요하며 
    render()이 메서드는 HTML을 반환함

*************************************************/

// 클래스로 컴포넌트 작성
class Gogh extends React.Component {
  render() {
    return (
      <div>
        <h2>안녕! 나는 고흐그림이야!</h2>
        <img src="./images/01.png" alt="고흐1" />
      </div>
    );
  }
}

// 랜더링
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Gogh />);

// 함수로 컴포넌트 작성
function IronMan() {
  return(
    <div>
      <h2>안녕! 나는 아이언맨이야!</h2>
      <img src="./images/ab1.jpg" alt="아이언맨" />
    </div>
  );
}

// 랜더링
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<IronMan />);

/************************************************* 
  [Props]
  props는 속성을 나타내며 컴포넌트로 전달함
  함수 인수와 같으며 속성으로 컴포넌트에 보냅니다.
*************************************************/
function Favorite(props) {
  return <h2>내가 좋아하는 색은 {props.color}이야!</h2>;
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<Favorite color="파란색"/>);

// 다른 컴포넌트내부에서 다른 컴포넌트를 사용할 수 있다!
function Ans() {
  return <h2>김씨가 똑하고 팔이부러졌대!</h2>;
}

function Who() {
  return (
    <div>
      <h1>김똑팔이가 누구야?</h1>
      <Ans />
    </div>
  );
}

const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<Who />);


/************************************************* 
  [파일의 컴포넌트]
  React는 코드를 재사용하는 것이므로 
  컴포넌트를 별도의 파일로 분할하는 것이 좋습니다.

  그렇게 하려면 파일 확장자를 가진 새 파일을 만들고 
  그 .js 안에 코드를 넣으십시오.

  파일 이름은 대문자로 시작해야 합니다.

  현재파일 상단에 import한다!

*************************************************/
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<Avengers />);




/************************************************* 

*************************************************/
/************************************************* 

*************************************************/
/************************************************* 

*************************************************/
