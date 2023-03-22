import './Header.scss';
import HeaderIcon from '../../assets/img/stick.png';

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={HeaderIcon} alt="header icon" />
        <span className="logo-text">Sticky notes App</span>
      </div>
    </header>
  );
};
