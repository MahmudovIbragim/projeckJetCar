import { Link } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  const links = [
    {
      name: "Land Rover",
      href: "/landrover",
    },
    {
      name: "Bmw",
      href: "/bmw",
    },
    {
      name: "Mercersdes",
      href: "/mercerdes",
    },
    {
      name: "Porsche",
      href: "/porsche",
    },
  ];
  return (
    <>
      <header className={scss.Header}>
        <div className="container">
          <div className={scss.Content}>
            <div className={scss.header_content}>
              <div className={scss.homeLogo}>
                <Link to="/">
                  <img
                    src="	https://jetcar24.ru/wp-content/uploads/2022/11/logo.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className={scss.nav}>
        <hr />
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
