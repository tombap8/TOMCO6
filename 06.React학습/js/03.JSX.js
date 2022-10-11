/********************************************************************* 
    [JSX 란 무엇입니까?]
    JSX는 JavaScript XML을 나타냅니다.
    JSX를 사용하면 React에서 HTML을 작성할 수 있습니다.
    JSX를 사용하면 React에서 HTML을 더 쉽게 작성하고 추가할 수 있습니다.

    [JSX 코딩]
    createElement()  JSX를 사용하면 JavaScript로 HTML 요소를 작성하고 
    appendChild()메소드 없이 DOM에 배치할 수 있습니다.

    JSX는 HTML 태그를 반응 요소로 변환합니다.

    JSX를 사용할 필요는 없지만 JSX를 사용하면 
    React 애플리케이션을 더 쉽게 작성할 수 있습니다.

*********************************************************************/



// JSX를 사용한예
const myElement1 = <h1>I Love JSX!</h1>;

const root1 = ReactDOM.createRoot(document.querySelectorAll('#root div')[0]);
root1.render(myElement1);

// JSX를 안쓴예
const myElement2 = React.createElement('h1', {}, 'I do not use JSX!');

const root2 = ReactDOM.createRoot(document.querySelectorAll('#root div')[1]);
root2.render(myElement2);

/********************************************************** 
    첫 번째 예에서 볼 수 있듯이 JSX를 사용하면 
    JavaScript 코드 내에서 직접 HTML을 작성할 수 있습니다.

    JSX는 ES6 기반 JavaScript 언어의 확장이며 
    런타임 시 일반 JavaScript로 변환됩니다.
**********************************************************/

/********************************************************** 
    JSX의 표현식
    JSX를 사용하면 중괄호 안에 표현식을 작성할 수 있습니다 { }.

    표현식은 React 변수, 속성 또는 기타 유효한 JavaScript 표현식
    일 수 있습니다. JSX는 표현식을 실행하고 결과를 반환합니다.
**********************************************************/

const myElement3 = <h1>React is {5 + 5} times better with JSX</h1>;

const root3 = ReactDOM.createRoot(document.querySelectorAll('#root div')[2]);
root3.render(myElement3);

/********************************************************** 
 [큰 HTML 블록 삽입]
 여러 줄에 HTML을 작성하려면 HTML을 괄호 안에 넣으십시오.

 [하나의 최상위 요소]
    HTML 코드는 하나 의 최상위 요소 로 래핑되어야 합니다 .
    따라서 두 개 이상의 요소를 작성 하려면 하나의 상위 요소 안에 
    모두 넣어야 합니다.
 **********************************************************/
const myElement4 = (
    <section>
        <h2>[큰 HTML 블록 삽입]</h2>
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    </section>
  );
  
  const root4 = ReactDOM.createRoot(document.querySelectorAll('#root div')[3]);
  root4.render(myElement4);
  
  /********************************************************** 
   HTML이 올바르지 않거나 HTML이 상위 요소를 놓치면 
   JSX에서 오류가 발생합니다.

    또는 "조각"을 사용하여 여러 줄을 줄 바꿈할 수 있습니다. 
    이것은 불필요한 추가 노드를 DOM에 추가하는 것을 방지합니다.

    조각은 빈 HTML 태그처럼 보입니다: 
    <></>
    (주의:아직 빈태그 지원안되는 경우 에러발생함!)
    -> <Fragment></Fragment>를 사용-> 이것도 에러나면 
    그냥 div를 써라!
   **********************************************************/
  const myElement5 = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
    );
    const root5 = ReactDOM.createRoot(document.querySelectorAll('#root div')[4]);
    root5.render(myElement5);
    
    
/********************************************************** 
 홀로 쓰는 요소는 닫아야 합니다.
JSX는 XML 규칙을 따르므로 HTML 요소를 제대로 닫아야 합니다.
**********************************************************/
const myElement6 = <input type="text" value="홀로태그는 스스로 닫아라!" />;

const root6 = ReactDOM.createRoot(document.querySelectorAll('#root div')[5]);
root6.render(myElement6);

/********************************************************** 
 [속성 클래스 = className]
class속성은 HTML에서 많이 사용되는 속성이지만 
JSX는 JavaScript로 렌더링되고 키워드 class는 
JavaScript에서 예약어이므로 JSX에서는 사용할 수 없습니다.

->>> 대신 속성 을 사용하십시오! className
**********************************************************/

const myElement7 = <h1 className="myclass">className속성으로 셋팅!!!</h1>;

const root7 = ReactDOM.createRoot(document.querySelectorAll('#root div')[6]);
root7.render(myElement7);

/********************************************************** 
    [조건 - if 문]
    React는 if명령문을 지원하지만 
    JSX 내부 에서는 지원하지 않습니다.

    JSX에서 조건문을 사용하려면 
    JSX if 외부에 명령문을 넣거나 
    대신 삼항연산자를 사용할 수 있습니다.
**********************************************************/

// x가 10보다 작으면 "안녕,친구야!"를 쓰고, 
// 그렇지 않으면 "잘가!"를 쓰세요.

// 옵션 1:
// if JSX 코드 외부에 명령문을 작성
const x = 5;
let text = "잘가!";
if (x < 10) {
  text = "안녕,친구야!";
}

const myElement8 = <h1>{text}</h1>;

const root8 = ReactDOM.createRoot(document.querySelectorAll('#root div')[7]);
root8.render(myElement8);

// 옵션 2:
// 삼항연산자로 작성
const y = 12;

const myElement9 = <h1>{y < 10 ? "안녕,친구야!" : "잘가!"}</h1>;

const root9 = ReactDOM.createRoot(document.querySelectorAll('#root div')[8]);
root9.render(myElement9);


