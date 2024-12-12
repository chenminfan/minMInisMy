import React, { useState, useEffect } from 'react'
import LazyLoadImg from "@components/common/LazyLoadImage";
import imageMinMin from '../../../assets/image/minfan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faObjectGroup, faPaintbrush, faHouseChimney, faDesktop } from '@fortawesome/free-solid-svg-icons'
import './isMy.scss'

export const TAG = ['HTML', 'SCSS', 'RWD', 'UI', 'figma', 'Adobe XD', 'Zeplin', 'Git/GitHub', 'React', 'Javascript', 'jQuery', 'npm', 'Bootstrap', 'MUI', 'PhotoShop', 'Illustrator', 'Indesign']

export default function IsMy() {
  const TEXTS = ['學技術', '寫程式', '做設計'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const Typewriter = ({ text, delay, infinite }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      let timeout;

      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

      } else if (infinite) {
        setCurrentIndex(0);
        setCurrentText('');
      }
      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span className="typeWriter">{currentText}</span>;
  };

  return (
    <div className="home-section-box">
      <div className="container-fluid">
        <div className="home-section-info row">
          <div className="col-md-6">
            <div className="home-section-title home-section-title-isMy">
              <h1>
                閔凡
                <div className="title-icon">
                  <FontAwesomeIcon icon={faHouseChimney} />
                </div>
                <div className="title-icon">
                  <FontAwesomeIcon icon={faPaintbrush} />
                </div>
                <div className="title-icon">
                  <FontAwesomeIcon icon={faObjectGroup} />
                </div>
                <div className="title-icon">
                  <FontAwesomeIcon icon={faDesktop} />
                </div>
              </h1>
              <h2>MinFan</h2>
              <div className='home-section-hobbies'>我的興趣 <Typewriter text={TEXTS[textIndex % TEXTS.length]} delay={600} infinite /></div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="home-section-img ">
              <div className="img-box"><LazyLoadImg className="" src={imageMinMin} alt="minFan" /></div>
            </div>
          </div>

        </div>

        <div className="home-section-tag">
          <div className="col-md-8">
            <ul className='tag-list'>
              {TAG.map((tag) => <li className='tag-item' key={`tag_${tag}`}>{`＃ ${tag}`}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}