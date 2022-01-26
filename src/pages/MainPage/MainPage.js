import React, {useEffect,useRef, useState} from 'react'
import './MainPage.css'
import {Link} from 'react-router-dom';
// import { dbService } from '../../../tools/fbase';
import NavBar from '../NavAndFooter/NavBar'
import Footer from '../NavAndFooter/Footer'

import section1 from '../../tools/section1.png'
import section2 from '../../tools/section2.png'
import section3 from '../../tools/section3.png'
import section4 from '../../tools/section4.png'
import section5 from '../../tools/section5.png'
import section6 from '../../tools/section6.png'

import building from '../../tools/building.png'
import cake from '../../tools/cake.png'
import hat from '../../tools/hat.png'
import calendar from '../../tools/calendar.png'

import {Input} from 'antd'

const features = [
    {
        image:cake,
        title:'생일',
        desc:`연인, 가족, 친구의 생일을 축하하기 위한 케이크`
    },
    {
        image:calendar,
        title:'기념일',
        desc:'크리스마스, 어린이날, N주년을 축하하기 위한 케이크'
    },
    {
        image:hat,
        title:'입학/졸업',
        desc:'연인, 가족, 친구의 생일을 축하하기 위한 케이크'
    },
    {
        image:building,
        title:'입사/은퇴',
        desc:'가족, 친구의 직장 입사/은퇴를 축하하기 위한 케이크'
    },
]

function MainPage({history}) {
    const [email,setEmail] = useState("");
    const targets = useRef(null)

    useEffect(() => {
    },[])

    const sendData = async () => {
        if(email.length < 4){
            alert("올바른 이메일 양식을 입력해주세요!");
            return;
        }

        // await dbService.collection("apply-datas").add({
        //     email:email,
        //     created:Date.now(),
        // });

        alert("신청되셨습니다. 감사합니다.");
        setEmail("");
    }

    const scrollDown = () => {
        targets.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <>
        <div className="main-page-container">
            <NavBar />
            <div className="main-page-section1 bgc1">
                <div className="main-section-left" style={{color:'white'}}>
                    <span className="one-section-small">
                        당신의 기념일을 더욱 특별하게
                    </span>
                    <div className="left bh" style={{height:'10px'}}>
                    </div>
                    <div className="left" style={{height:'40px'}}>
                    </div>
                    <span className="one-section-big">
                        레터링케이크 간편 주문제작 플랫폼,<br/>
                        케이크 하우스
                    </span>
                    <div className="row" style={{marginTop:'150px'}}>
                        <Input className="input" placeholder="전화번호를 입력해주세요." value={email} onChange={e => setEmail(e.currentTarget.value)} />
                        <button className="apply-button" onClick={sendData}>
                            출시 알림 받기
                        </button>
                    </div>
                    <span className="one-section-small" style={{marginTop:'10px', fontSize:'16px'}}>
                        출시 알림 받기를 클릭하고 전화번호를 남겨주시면 문자로 알려드릴게요!
                    </span>
                </div>
                <div className="main-section-right">              
                    <img src={section4} className="section-image2"/>
                </div>
            </div>

            <div className="main-page-section1 bgc2">
                <div className="main-section-left" style={{color:'black', padding:'50px 0px', width:'100%', justifyContent:'center'}}>
                    <span className="one-section-big" style={{width:'100%', textAlign:'center'}}>
                        이런 분들에게 필요해요!
                    </span>
                    <div className="features-container">
                        {features.map((item, index) => {
                            return(
                                <span className="feature">
                                    <div style={{width:'100%', textAlign:'left'}}>
                                        <img src={item.image} width={50} className="feature__icon"/>
                                    </div>
                                    <div className="feature__title">
                                        {item.title}
                                    </div>
                                    <div className="feature__desc">
                                        {item.desc}
                                    </div>
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="main-page-section1 bgc3">
                <div className="main-section-left" style={{color:'white'}}>
                    <span className="one-section-big">
                        다양한 디자인과<br/>
                        케익샵을 한 눈에!
                    </span>
                    <span className="one-section-small">
                        인*타그램과 카*오톡은 그만<br/>
                        업체 선정부터 주문까지 케이크하우스와 함께 하세요.
                    </span>
                </div>
                <div className="main-section-right">              
                    <img src={section1} className="section-image bsr" />
                </div>
            </div>

            <div className="main-page-section1 bgc4">
                <div className="main-section-right">              
                    <img src={section3} className="section-image bsl" />
                </div>
                <div className="main-section-left">
                    <span className="one-section-big">
                        클릭 몇번으로 끝내는<br/>
                        간편한 주문
                    </span>
                    <span className="one-section-small">
                        내가 원하는 케이크를 손쉽게 제작할 수 있어요
                    </span>
                </div>
            </div>

            <div className="main-page-section1 bgc4">
                <div className="main-section-left">
                    <span className="one-section-big">
                        주문서만 적어주세요<br />
                        케익샵은 저희가 추천해드려요
                    </span>
                    <span className="one-section-small">
                        가격 비교를 통해서 합리적인 선택을 해보세요<br/>
                        하나의 주문서로 여러 케익샵에 주문할 수 있어요
                    </span>
                </div>
                <div className="main-section-right">              
                    <img src={section2} className="section-image bsr" />
                </div>
            </div>
            {/* <div className="main-page-section" style={{backgroundColor:"white"}}>
                <div className="main-section-left">
                    <div className="middle-section">
                        <span className="one-section-big">
                            제작부터 데이터 분석까지<br/>9,990원의<br/>합리적인 가격으로
                        </span>
                        <span className="one-section-small">
                            9,900원에 일주일 무료<br/>
                            이후 하루마다 단돈 500원이 추가되는<br/>
                            합리적인 가격으로 만나 보세요.
                        </span>
                    </div>
                </div>
                <div className="main-section-right">                   
                    <img src={section3}  className="section-one-image"/>
                </div>
            </div> */}

            <div ref={targets} className="main-page-section1 bgc4">
                <div className="main-section-right">              
                    <img src={section6} className="section-image" style={{width:'30vw'}}/>
                </div>
                <div className="main-section-left">
                    <span className="one-section-small">
                        곧 출시합니다!
                    </span>
                    <span className="one-section-big">
                        사전 신청하면 혜택이 펑펑!<br />
                        지금 바로 예약하세요
                    </span>
                    <span className="one-section-small">
                        출시 알림 받기를 클릭하고 전화번호를 남겨주시면 문자로 알려드릴게요!
                    </span>
                    <div className="row" style={{marginTop:'50px'}}>
                        <Input className="input" placeholder="전화번호를 입력해주세요." value={email} onChange={e => setEmail(e.currentTarget.value)} />
                        <button className="apply-button bt2" onClick={sendData}>
                            출시 알림 받기
                        </button>
                    </div>
                </div>
            </div>
        </div>
            <Footer />
           </>
    )
}

export default MainPage