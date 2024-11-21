import React from 'react'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="home-section-box">
            <div className="col-md-9">
              <h2 className="home-title">ABOUT</h2>
              <div className="home-text">
                <div className='home-text-p'>
                  <p>平面設計開始至網頁設計、切版、程式撰寫，目前擅長運用js及React框架開發網頁。擁有豐富的大型電商網站切版及簡易程式撰寫的經驗，熟悉react框架、html、scss/css。
                  </p>
                </div>
                <div className='home-text-p'>
                  <p>曾任職PChome前端設計部的資深工程師，曾做過大小平台，活動網站（近三年的Apple iphone保險活動），PChome前後台維運及前台翻新等切版及撰寫畫面呈現的程式工作事宜。</p>
                  <p>以Scrum方式與Master/ PO/ 設計/ 前端、後端工程師的工作流程，於專案上掌握度優異，與主管討論，協助組內相關管理事宜及為帶領翻新的頁面的整體網站架構及UI系統規劃等相關經驗。</p>
                </div>
                {/* <div>
                      <p>曾任職於雄獅旅遊的企劃設計資深專員，為高端旅遊產品一頁式網頁形象包裝設計（近年些的郵輪旅遊（公主遊輪）、或以其他主題旅遊：高爾夫球、單車、馬拉松、頂級島嶼等多項主題。），支援行銷製作宣傳物及廣告活動製作及VIP客戶客製化的高端旅遊專案。</p>
                      <p>於專案上掌握度優異，主動與主管討論，協助組內相關管理事宜，並且於 2016 下半年 ~ 2018 年，帶領組內四位同仁。相關管理及領導工作範疇: 專案派案、視覺校稿、專案進度協調及手上案件進度狀況、每月工作歸檔、帶領新人等。</p>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}