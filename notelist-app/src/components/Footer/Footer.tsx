import './Footer.scss';
import githubLogo from '../../assets/img/github-logo.svg';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="footer-container">
        <a
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/proboynick"
        >
          <img className="footer__social-img" src={githubLogo} alt="" />{' '}
          <span>Anton Kuziukou &copy; 2023</span>
        </a>
      </div>
    </footer>
  );
};
