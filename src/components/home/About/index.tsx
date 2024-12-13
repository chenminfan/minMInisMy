import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessQueen } from '@fortawesome/free-solid-svg-icons'
import './about.scss'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="home-section-box">
            <div className="col-md-9">
              <h2 className="home-title">ABOUT</h2>
              <div className="about-text">
                <div className='about-text-p'>
                  <ul className='about-text-list'>
                    <li>
                      <FontAwesomeIcon className="mainIcon" icon={faChessQueen} />
                      <div className="about-text-p">畢業於臺灣科技大學建築系碩士及聖約翰科技大學資訊管理系</div>
                    </li>
                    <li>
                      <FontAwesomeIcon className="mainIcon" icon={faChessQueen} />
                      <div className="about-text-p"><span>具有設計及資訊背景</span>，擁有豐富的旅遊電商及電子商務的相關工作8年經歷，<span>熟悉前端及設計相關技術</span>。</div>
                    </li>
                    <li>
                      <FontAwesomeIcon className="mainIcon" icon={faChessQueen} />
                      <div className="about-text-p">在新專案從零開始，能與團隊間相互合作建立網頁設計規範，在團隊中也會協助同仁熟悉工作流程，內容，協調。</div>
                    </li>
                    <li>
                      <FontAwesomeIcon className="mainIcon" icon={faChessQueen} />
                      <div className="about-text-p"><span>對於新事物、新技術，充滿熱誠，喜歡嘗試，研究</span>，在能力範圍內也樂於助人。</div>
                    </li>
                  </ul>
                </div>
                <div className='about-text-p'>
                  <p>從平面設計起步，逐漸擴展到網頁設計、切版與程式撰寫，目前擅長運用JavaScript及React框架開發網頁。擁有豐富的大型電商網站切版及簡易程式撰寫的經驗，<span>熟悉react框架、html、scss/css</span>。
                  </p>
                </div>
                <div className='about-text-p'>
                  <p>曾<span>任職於PChome前端設計部，擔任資深工程師</span>，參與過各大平台和活動網站的設計與開發，包括近三年的Apple iPhone保險活動網站，PChome前後台維運及前台翻新等切版及撰寫畫面呈現的程式工作事宜。</p>
                  <p>以Scrum敏捷開發流程進行專案，與Master/ PO/ 設計/ 前端、後端工程師等單位工作協作，於專案上掌握度優異，與主管討論，協助組內相關管理事宜及為帶領翻新的頁面的整體網站架構及UI系統規劃等相關經驗。</p>
                </div>
              </div>
            </div>
          </div >
        </div >
      </div >
    </div >
  )
}