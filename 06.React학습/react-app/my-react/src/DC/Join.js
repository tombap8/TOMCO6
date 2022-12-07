import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Join() {
    // [후크 useState 메서드 셋팅하기]
    // [ 1. 입력요소 후크변수 ]
    // 1. 아이디변수
    const [userId, setUserId] = useState("");
    // 2. 비밀번호변수
    const [pwd, setPwd] = useState("");
    // 3. 비밀번호확인변수
    const [chkPwd, setChkPwd] = useState("");
    // 4. 사용자이름변수
    const [userName, setUserName] = useState("");
    // 5. 이메일변수
    const [email, setEmail] = useState("");

    // [ 2.에러상태값 후크변수 ]
    // 1. 아이디에러변수
    const [userIdError, setUserIdError] = useState(false);
    // 2. 비밀번호에러변수
    const [pwdError, setPwdError] = useState(false);
    // 3. 비밀번호확인에러변수
    const [chkPwdError, setChkPwdError] = useState(false);
    // 4. 사용자이름에러변수
    const [userNameError, setUserNameError] = useState(false);
    // 5. 이메일에러변수
    const [emailError, setEmailError] = useState(false);

    

    // [ 유효성 검사 메서드 ]
    
    // 1. 아이디 유효성 검사
    const onChangeUserId = (e) => { // e - 이벤트전달변수
        // 아이디 유효성 검사식(주의:따옴표싸지말것!)
        const valid = /^[A-Za-z0-9+]{5,}$/;

        // 입력값 확인 : e.target -> 이벤트가 발생한 요소자신
        console.log(e.target.value);

        // 에러아님상태 if문 
        // 조건: 유효성 검사결과가 true인가? 에러상태 false
        // test() 메서드 JS기본 유효성검사 기능
        // 유효성검사식변수.test(검사할값) -> 통과시 true, 불통과시 false
        if(valid.test(e.target.value) || !(e.target.value)) setUserIdError(false);
        // 그밖에 경우 에러상태 true
        else setUserIdError(true);

        // 실제 userId 변수값은 setUserId를 업데이트 해야함!
        setUserId(e.target.value)

    }; //////////// onChangeUserId //////////

    // 2. 비밀번호 유효성 검사
    const onChangePwd = (e) => {
        const valid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (valid.test(e.target.value) || !(e.target.value)) setPwdError(false);
        else setPwdError(true);

        if (!chkPwd || e.target.value === chkPwd) setChkPwdError(false);
        else setChkPwdError(true);
        setPwd(e.target.value);
    };
    // 3. 비밀번호 유효성 검사
    const onChangeChkPwd = (e) => {
        if (pwd === e.target.value) setChkPwdError(false);
        else setChkPwdError(true);
        setChkPwd(e.target.value);
    };
    // 4. 사용자이름 유효성 검사
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    // 5. 이메일 유효성 검사
    const onChangeEmail = (e) => {
        const valid = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (valid.test(e.target.value) || !e.target.value) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    // 전체 유효성검사 체크
    const totalValid = () => {
        if(!userId) setUserIdError(true);
        if(!pwd) setPwdError(true);
        if(!chkPwd) setChkPwdError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(userId && pwd && chkPwd && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        // 기본이동 서브밋 막기
        e.preventDefault();

        // 유효성검사 전체 통과시
        if(totalValid()) alert("처리페이지로 이동!^^");
        // 유효성검사 불통과시
        else alert("입력을 수정하세요!");
        
    }

    return (
        <div>
            <form>
                <div>
                    <label> 아이디를 입력하세요
                    </label>
                        <input type="text" maxLength="20" placeholder="아이디" value={userId} onChange={onChangeUserId} />
                        {userIdError && 
                        <div className="invalid-input">
                            <small style={{color:"red"}}>
                                사용자 ID는 5자 이상이어야 하며 문자 
                                또는 숫자를 포함해야 합니다.
                            </small>
                        </div>}
                </div>
                <div>
                    <label> 비밀번호를 입력하세요
                        <input type="password" maxLength="20" placeholder="비밀번호" value={pwd} onChange={onChangePwd} />
                        {pwdError && 
                        <div className="invalid-input">
                        <small style={{color:"red"}}>
                            비밀번호는 8자 이상이어야 하며 문자와 숫자를 
                            각각 하나 이상 포함해야 합니다.
                        </small>
                    </div>}
                    </label>
                </div>
                <div>
                    <label> 비밀번호 확인을 입력하세요
                        <input type="password" maxLength="20" placeholder="비밀번호확인" value={chkPwd} onChange={onChangeChkPwd} />
                        {chkPwdError && 
                        <div className="invalid-input">
                        <small style={{color:"red"}}>
                            비밀번호가 일치하지 않았습니다.
                        </small>
                    </div>}
                    </label>
                </div>
                <div>
                    <label> 이름을 입력하세요
                        <input type="text" maxLength="20" placeholder="이름" value={userName} onChange={onChangeUserName} />
                        {userNameError && 
                        <div className="invalid-input">
                        <small style={{color:"red"}}>
                            필수입력
                        </small>
                    </div>}
                    </label>
                </div>
                <div>
                    <label> 이메일을 입력하세요
                        <input type="text" maxLength="50" placeholder="이메일주소" value={email} onChange={onChangeEmail} />
                        {emailError && 
                        <div className="invalid-input">
                        <small style={{color:"red"}}>
                            유효한 이메일 형식을 입력하십시오.
                        </small>
                    </div>}
                    </label>
                </div>
                <br />
                <div>
                    <button onClick={onSubmit}>회원가입</button>
                </div>
            </form>
            <br />
            <span className="text">이미 회원이신가요? 
            <Link to="/login" className="link">로그인</Link></span>
        </div>
    );
}

export default Join