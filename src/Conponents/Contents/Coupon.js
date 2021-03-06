import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "../../font/font.css"

const Coupon_block = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
    text-align: center;
    font-family: "font";
    img{
        height: 270px;
        width: 200px;
    }
`;

const changePic = () => {
    document.getElementById('event_img').src = "/img/broken.png";
    setTimeout(showPopup, 500);
}

const showPopup = () => {
    var url = "/Coupon";
    var width = 400;
    var height = 550;
    var center_left = (document.body.offsetWidth / 2) - (width / 2);
    var center_top = (document.body.offsetHeight / 6) - (height / 2);
    var option = "width=" + width + ", height=" + height + ", left=" + center_left + ", top=" + center_top + ", scrollbars=no";
    window.open(url, "coupon", option);
}

const Coupon = () => {
    /*state = {
        shop_name: '브릿지 카페'
    };*/

    return (
        <div>
            <Fade bottom>
                <Coupon_block>
                    <h1>알이 도착했습니다!</h1>
                    <img onClick={changePic} id="event_img" src="/img/egg.png" /><br />
                    <h2>알을 까고 브릿지 카페</h2>
                    <h2>쿠폰을 획득하세요!</h2>
                </Coupon_block>
            </Fade>
        </div>
    );
};

export default Coupon;