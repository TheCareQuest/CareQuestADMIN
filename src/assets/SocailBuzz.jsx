import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsLink, BsEnvelope } from 'react-icons/bs';
import Header from './header';
import Sidebar from './sidebar';

const socialMediaAccounts = {
  facebook: 'https://www.facebook.com/profile.php?id=61555414007487',
  twitter: 'https://twitter.com/your-twitter-account',
  instagram: 'https://instagram.com/thecarequest?igshid=NzZlODBkYWE4Ng==',
  gitHub: 'https://github.com/TheCareQuest/',
 
};

function SocialBuzz() {
  const handleCardClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-container">
        <div className="main-title">
          <h3>SOCIAL BUZZ</h3>
        </div>

        <div className="main-cards">
          {Object.entries(socialMediaAccounts).map(([platform, link]) => (
            <div className="card" key={platform} onClick={() => handleCardClick(link)}>
              <div className="card-inner">
                {platform === 'email' ? (
                  <BsEnvelope className="card_icon" />
                ) : (
                  <div className={`icon ${platform === 'gitHub' ? 'github-icon' : ''}`}>
                    {platform === 'facebook' && <BsFacebook className="icon" />}
                    {platform === 'twitter' && <BsTwitter className="icon" />}
                    {platform === 'instagram' && <BsInstagram className="icon" />}
                    {platform === 'gitHub' && <BsLink className="icon" />}
                  </div>
                )}
                <h3>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default SocialBuzz;
