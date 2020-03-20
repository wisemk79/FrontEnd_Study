import React from 'react'
import "./Header.css";
import logo from "../images/logo.svg";
import hd_down from "../images/hd_down.webp";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="hd_content">
                    <div className="hd_up">
                        <div className="hd_event"><p>신규 회원가입 시 <span>15% </span>쿠폰 증정</p></div>
                        <ui className="hd_menu">
                            <li><a href="javascript:void(0);">회원가입</a></li>
                            <li><a href="javascript:void(0);">로그인</a></li>
                            <li><a href="javascript:void(0);">고객센터 <img src={hd_down}></img></a>
                                <ul className="hd_downMenu">
                                    <li><a href="#">공지사항</a></li>
                                    <li><a href="#">자주하는 질문</a></li>
                                    <li><a href="#">1:1 문의</a></li>
                                </ul>
                            </li>
                        </ui>
                    </div>
                    <div className="hd_logo"><a href="javascript:void(0);">
                        <img src={logo}></img>
                    </a>
                    </div>
                    <div class="floating">
                        <div> 다음뷰 추천위젯코드 삽입</div>
                        <div>트위터 공유코드 삽입</div>
                        <div> 페이스북 공유코드 삽입</div>
                    </div>
                </div>
            </div>
        </>
    )
}
