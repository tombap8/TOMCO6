import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Join() {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [userIdError, setUserIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const onChangeUserId = (e) => {
        const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
        if ((!e.target.value || (userIdRegex.test(e.target.value)))) setUserIdError(false);
        else setUserIdError(true);
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if ((!e.target.value || (passwordRegex.test(e.target.value)))) setPasswordError(false);
        else setPasswordError(true);

        if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        if (password === e.target.value) setConfirmPasswordError(false);
        else setConfirmPasswordError(true);
        setConfirmPassword(e.target.value);
    };
    const onChangeUserName = (e) => {
        setUserNameError(false);
        setUserName(e.target.value)
    };
    const onChangeEmail = (e) => {
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!e.target.value || emailRegex.test(e.target.value)) setEmailError(false);
        else setEmailError(true);
        setEmail(e.target.value);
    };

    const validation = () => {
        if(!userId) setUserIdError(true);
        if(!password) setPasswordError(true);
        if(!confirmPassword) setConfirmPasswordError(true);
        if(!userName) setUserNameError(true);
        if(!email) setEmailError(true);

        if(userId && password && confirmPassword && userName && email) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if(validation()) return;
        
        // 하단에 데이터 처리 페이지 호출
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label> 아이디를 입력하세요
                        <input type="text" maxLength="20" placeholder="아이디" value={userId} onChange={onChangeUserId} />
                        {userIdError && <div className="invalid-input">사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.</div>}
                    </label>
                </div>
                <div>
                    <label> 비밀번호를 입력하세요
                        <input type="password" maxLength="20" placeholder="비밀번호" value={password} onChange={onChangePassword} />
                        {passwordError && <div className="invalid-input">비밀번호는 8자 이상이어야 하며 문자와 숫자를 각각 하나 이상 포함해야 합니다. </div>}
                    </label>
                </div>
                <div>
                    <label> 비밀번호 확인을 입력하세요
                        <input type="password" maxLength="20" placeholder="비밀번호확인" value={confirmPassword} onChange={onChangeConfirmPassword} />
                        {confirmPasswordError && <div className="invalid-input">비밀번호가 일치하지 않았습니다.</div>}
                    </label>
                </div>
                <div>
                    <label> 이름을 입력하세요
                        <input type="text" maxLength="20" placeholder="이름" value={userName} onChange={onChangeUserName} />
                        {userNameError && <div className="invalid-input">필수입력</div>}
                    </label>
                </div>
                <div>
                    <label> 이메일을 입력하세요
                        <input type="text" maxLength="50" placeholder="이메일주소" value={email} onChange={onChangeEmail} />
                        {emailError && <div className="invalid-input">유효한 이메일 형식을 입력하십시오.</div>}
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