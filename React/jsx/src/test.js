import React from 'react'
import "./test.css";
import ico_checkbox_off from './ico_checkbox_off.webp'

export default function Join() {
  const handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }
  return (
    <>
      <div className="join">
        <div className="join_content">
          <div className="join_location"><span>홈 > 회원가입</span></div>
          <div className="join_tit"><h2>회원가입</h2></div>
          <div className="tit_sub"><span>* 필수입력사항</span></div>
          <div className="join_main">
            <div className="join_board">
              <table className="tb1_comm">
                <tbody>
                  <tr className="join_name">
                    <td className="memCols1">아이디*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"></input>
                      <a href="#"><span>중복확인</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="비밀번호를 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호확인*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="비밀번호를 한 번 더 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이름*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="고객님의 이름을 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이메일*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="예:KICCAMPUS@hwig.com"></input>
                      <a href="#"><span>이메일 중복확인</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">휴대폰*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="숫자만 입력해주세요"></input>
                      <a href="#"><span>인증번호 받기</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">배송주소*</td>
                    <td className="memCols2">
                      <a href="#"><span>주소검색</span></a>
                      <input type="text"></input>
                      <input type="text"></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="join_agree">
              <div className="agree_tit">
                <h3>이용약관동의*</h3>
                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
              </div>
              <div className="agree_total">
                <div>
                  <label className="ch">
                    <label>
                      <input type="checkbox" id="agree_check" />
                      <label for="agree_check"><img src={ico_checkbox_off}></img></label>
                    </label>
                    <span>전체동의</span>
                  </label>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="join_btn"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <DaumPostcode onComplete={handleAddress} /> */}
    </>
  )
}