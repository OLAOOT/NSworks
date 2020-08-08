import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import TopImage from "../../components/sections/TopImage";

import maintenance1 from "./../../img/maintenance1.png";
import maintenance1_m from "./../../img/maintenance1_m.png";
import maintenance2 from "./../../img/maintenance2.png";

import "../../css/maintenance.css";
import $ from "jquery";
window.$ = $;

const img_data = {
  image: "banner5.jpg",
  title: "유지보수"
};

export default function Engineer2() {
  $(document).ready(function() {
    var count = 0;
    do_ani('.article > div > *',count)
    do_ani('.split-item',count)
    $(window).scroll( function(){
      do_ani('.article > div > *',count)
      do_ani('.split-item',count)
    });
  });

  const do_ani = (target) =>{
    var count = 0;
    $(target).each( function(i){
      
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      if( bottom_of_window > bottom_of_object/1.3){
        if($(this).css('animation-name') === 'tmp')
          count+=1
        
       
        $(this).css('animation-name','slide1').delay( 200*count );
        $(this).animate({'opacity':'1'},1000);        
        
      }
    }); 
  }
  if($( window ).width() < 600){
    $('#maintenance1').attr('src',maintenance1_m)
  }
  return (
    <div>
      <TopImage data={img_data} />
      <div className="maintenance_container">
        <div className="article">
          <div className="article_top">
            <div>
              <span>서버 스토리지 통합 유지보수</span>
            </div>
          </div>
          <div className="article_mid">
            <img src={maintenance1} id="maintenance1"/>
          </div>
          <div className="article_top">
            <div>
              <span>유지보수 대상고객</span>
            </div>
          </div>
          <div className="article_mid">
            <img src={maintenance2} />
            <div>
                <ul>
                    <li>서버를 관리하는 전문 인력이 없는 고객</li>
                    <li>체계적인 장비관리가 필요한 고객</li>
                    <li>전산실의 비용절감과 효율적 운영을 원하는 고객</li>
                    <li>전산실의 아웃소싱을 원하는 고객</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
