function Hello() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>
        [ 리액트란? ]<br></br>

        # 프론트엔드 JS 라이브러리다!<br></br>
        # 사용자 UI의 구성요소를 빌드하기 위한도구<br></br>

        [ 작동원리 ]<br></br>
        # 가상돔(Virtual DOM)을 사용하여 <br></br>
        최소의 html리소스를 사용함으로<br></br>
        빠르고 쉽게 UI화면의 구성한다!<br></br>

        # 가상돔은 실제DOM을 변경하기전에<br></br>
        메모리상에서 구성하는 가짜 DOM이다!<br></br>
        변경사항을 한번에 구성하여 반영하기 위한도구다!<br></br>
        </h2>
      </div>
    );
  }

  ReactDOM.render(<Hello />, document.getElementById('mydiv'))