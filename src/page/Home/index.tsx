import React, { useEffect, useState } from 'react';
import { useScreen } from '@hook/useScreen'
import LazyLoadImg from "@components/common/LazyLoadImage";
import imageMinMin from '../../assets/image/minfan.jpg'

import './home.scss'

export const TAG = ['HTML', 'SCSS', 'RWD', 'UI', 'figma', 'git/GitHub', 'React', 'javascript', 'jQuery', 'npm', 'Bootstrap', 'MUI', 'PhotoShop', 'Illustrator', 'Indesign']

const Home = () => {
  const [windowHeight]: number[] = useScreen();
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

    return <span className='typeWriter'>{currentText}</span>;
  };

  return (
    <div className='home-page'>
      <section className='home-section home-section-first is-show'>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="home-section-box">
                <div className="col-md-7">
                  <div className="home-section-info">
                    <div className="home-section-title">
                      <h1>
                        閔凡
                        <i className="material-symbols-outlined">
                          arrow_right_alt
                        </i>
                        <div className="title-icon">
                          <i className="material-symbols-outlined">
                            brush
                          </i>
                        </div>
                        <div className="title-icon">
                          <i className="material-symbols-outlined">
                            auto_stories
                          </i>
                        </div>
                        <div className="title-icon">
                          <i className="material-symbols-outlined">
                            desktop_windows
                          </i>
                        </div>
                      </h1>
                      <h2>MinFan</h2>
                      <div>我的興趣 <Typewriter text={TEXTS[textIndex % TEXTS.length]} delay={600} infinite /></div>

                    </div>
                    <div className="home-section-img">
                      <div className="img_box"><LazyLoadImg className="" src={imageMinMin} alt="minFan" /></div>
                    </div>

                  </div>
                  <div className="home-section-tag">
                    <ul className='tag-list'>
                      {TAG.map((tag) => <li className='tag-item'>{`＃ ${tag}`}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
      <section className={`home-section home-section-second ${windowHeight > 100 ? 'is-show' : ''}`}>
        test
      </section>
      {
        windowHeight > 200 && (
          <button
            className='btn btn-primary btn-BUY-top fade'
            onClick={() => {
              window.scrollTo(0, 0)
            }}>
            <i className="bi bi-arrow-up-circle"></i>
          </button>
        )
      }
    </div >
  );
}

export default Home;