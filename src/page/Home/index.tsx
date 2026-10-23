import React, { useState, useEffect } from 'react';
import { useScreen } from '@hook/useScreen';
// import IsMy from '@components/home/IsMy';
import About from '@components/home/About';
import Work from '@components/home/Work';
import Portfolio from '@components/home/Portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useGTM } from '@utils/useGTM';
import './home.scss';

const Home = ({ isBlocked }) => {
  const [windowHeight]: number[] = useScreen();
  const { pushToDataLayer } = useGTM();
  const [navId, setNavId] = useState<string>('');
  const NAV_LINK = [
    { name: '關於我', link: '#About' },
    { name: '作品', link: '#Portfolio' },
    { name: '經歷', link: '#Work' }
  ];
  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollToAnchor = (sectionId) => {
    const domId = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
    const element = document.getElementById(domId);
    if (element) {
      const offsetTop = element.offsetTop - 56; // 減去導航欄高度
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 偏移量

      NAV_LINK.forEach(({ link }) => {
        const element = document.getElementById(link);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setNavId(link);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredNav = isBlocked
    ? NAV_LINK.filter((nav) => nav.name !== '關於我')
    : NAV_LINK;

  const windowHeightBlack = isBlocked ? true : (windowHeight > 900 || (windowHeight > scrollHeight));
  return (
    <div className='home-page' data-bs-smooth-scroll="true">
      <section className='section-null'>
        <p>🔒 目前在職中，暫無開放個人資訊，有任何指教可 <a href="mailto:mingfan1202job@gmail.com">與我聯繫</a>。</p>
        <p>下方經歷及個人作品可供參考及欣賞，感謝您</p>
      </section>

      {/* <section className='home-section home-section-first is-show'>
          <IsMy />
        </section>

        <section id="About" className={`home-section home-section-second ${windowHeight > scrollHeight || windowHeight > 120 ? 'is-show' : ''}`}>
          <About />
        </section> */}

      <section id="Portfolio" className={`home-section home-section-portfolio ${windowHeightBlack ? 'is-show' : ''}`}>
        <Portfolio />
      </section>

      <section id="Work" className={`home-section home-section-work ${windowHeight > scrollHeight || (isBlocked && windowHeight > 2400) ? 'is-show' : ''}`}>
        <div className="home-section-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box">
                  <div className="col-md-9">
                    <h2 className="home-title text-white">WORK EXPERIENCE</h2>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Work />
        </div>
      </section>

      <div className="ui-top">
        <div className={`btn-group-vertical ${windowHeight > 300 ? 'is-animation' : ''}`} role="group" aria-label="Vertical button group">
          {filteredNav.map((nav) => {
            return (
              <button key={`nav_${nav.link}`} type="button" className={`btn btn-sm btn-primary ${nav.link === navId ? 'active' : ''}`} id="GTM_button"
                data-gtm-id-name={nav.link.substring(1)}
                onClick={() => {
                  scrollToAnchor(nav.link);
                  setNavId(nav.link);
                  pushToDataLayer({
                    event: 'buttonClick',
                    buttonText: nav.name,
                    userId: 456,
                  });
                }}
              >{nav.name}</button>
            );
          })}
          <button type="button" className={`btn btn-primary btn-sm btn-top ${windowHeight > 300 ? ' is-show' : ''}`} onClick={() => {
            window.scrollTo(0, 0);
            setNavId('');
          }}><FontAwesomeIcon className="mainIcon" icon={faUpLong} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;