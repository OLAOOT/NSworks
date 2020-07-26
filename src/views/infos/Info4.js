/*global kakao */
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TopImage from "../../components/sections/TopImage";

import ceo from "./../../img/ceo-1.jpg";
import img1 from "./../../img/img_ccai1.png";
import img2 from "./../../img/img_ccai2.png";

import '../../css/info.css';

const useStyles = makeStyles((theme) => ({
    article_mid: {
      display: 'flex',
      marginTop:500,
      flexWrap: 'wrap',
      justifyContent:'center',

      '& > *': {
        margin: '1%',
        width:'30%',
        minWidth:'250px',
        height: 550,
      },
      '& > * > img': {
        position: 'relative',
        left: 0,
        width:'100%',
        maxHeight:'200px'
      },
      '& > * > div': {
        textAlign: 'left',
        padding: '25px 40px 0px',
        fontSize: 19,
        fontWeight: 'bold'
      },
      '& > * > div:last-child': {
        fontWeight: 'normal'
      },
    },
  }));

  const img_data = [
    {
      image: './../../img/slider1.jpg',
      title: "찾아오시는 길",
    }
  ];



export default function Info4() {    
    const classes = useStyles();

    if(window.location.href.indexOf('location'))
    {
        
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c32c1763e65921610b0b14021a17138f&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {       
                let container = document.getElementById('Mymap');
                let options = {
                  center: new kakao.maps.LatLng(36.4864563,127.2574583),
                  level: 4
                };
        
                const map = new window.kakao.maps.Map(container, options);
                var markerPosition  = new kakao.maps.LatLng(36.4864563,127.2574583); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            });
        };
    }
    return (
      <div>
        {img_data.map(v => (
          <TopImage data={v} />
        ))}
        <div className="info_container" >
            <div className="article" id="article4">
                <table className="type03">
                    <tr>
                    <th scope="row">주소</th>
                    <td>세종특별자치시 한누리대로 249, 에스제이타워 609호</td>
                    </tr>
                    <tr>
                    <th scope="row">전화</th>
                    <td>070-4232-2240</td>
                    </tr>
                    <tr>
                    <th scope="row">팩스</th>
                    <td>02-1234-5679</td>
                    </tr>
                    <tr>
                    <th scope="row">이메일</th>
                    <td>email@youremail.com</td>
                    </tr>
                    <tr>
                    <th scope="row">지하철 이용</th>
                    <td>지하철 이용 방법 안내</td>
                    </tr>
                    <tr>
                    <th scope="row">버스 이용</th>
                    <td>버스노선 및 코스 안내</td>
                    </tr>
                </table>
                <div id="Mymap">
                </div>
            </div>
        </div>
      </div>
      );
}