function MakeDev() {
  return <h1>나는 개발자야!</h1>;
}

function LostDev() {
  return <h1>개발자가 뭐지?</h1>;
}

function Developer(props) {
  const isNow = props.isDev;
  if (isNow) {
    return <MakeDev />;
  }
  return <LostDev />;
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(<Developer isDev={true} />);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<Developer isDev={false} />);




function Garage(props) {
    const cars = props.cars;
    return (
      <React.Fragment>
        <h1>자동차 위시리스트</h1>
        {cars.length > 0 &&
          <h2>
            내가 사고 싶은차는 모두 {cars.length} 대입니다.
          </h2>
        }
      </React.Fragment>
    );
  }
  
  const cars = ['제네시스', '그랜저', '롤스로이스'];
  const root3 = ReactDOM.createRoot(document.getElementById('root3'));
  root3.render(<Garage cars={cars} />);



  function MadeGoal() {
    return <h1>골입니다!골인!골인!!!</h1>;
  }
  
  function MissedGoal() {
    return <h1>아~~! 아쉽네요! 노골입니다!</h1>;
  }

  function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <React.Fragment>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </React.Fragment>
    );
  }
  
  const root4 = ReactDOM.createRoot(document.getElementById('root4'));
  root4.render(
    <React.Fragment>
        <h1>한국팀 지금 슛~~~!</h1>
        <Goal isGoal={false} />
    </React.Fragment>
  );

  const root5 = ReactDOM.createRoot(document.getElementById('root5'));
  root5.render(
    <React.Fragment>
        <h1>한국팀 다시 슛~~~!</h1>
        <Goal isGoal={true} />
    </React.Fragment>
  );
  
  




