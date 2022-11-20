function Car(props) {
    return <li>나는 { props.brand }입니다!</li>;
  }
  
  function WishList() {
    const cars = ['제네시스', '그랜저', '롤스로이스'];
    return (
      <React.Fragment>
        <h1>나의 자동차 위시리스트는?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </React.Fragment>
    );
  }
  
  const root1 = ReactDOM.createRoot(document.getElementById('root1'));
  root1.render(<WishList />);



  function Car2(props) {
    return <li>{ props.seq } { props.cname }입니다!</li>;
  }
  function WishList2() {
    const cars = [
        {id: '첫번째', brand: '레이'},
        {id: '두번째', brand: '캐스퍼'},
        {id: '세번째', brand: '티코'}
      ];
    return (
      <React.Fragment>
        <h1>나의 두번째 자동차 위시리스트는?</h1>
        <ul>
        {cars.map((temp) => <Car2 seq={temp.id} cname={temp.brand} />)}
        </ul>
      </React.Fragment>
    );
  }
  
  const root2 = ReactDOM.createRoot(document.getElementById('root2'));
  root2.render(<WishList2 />);



