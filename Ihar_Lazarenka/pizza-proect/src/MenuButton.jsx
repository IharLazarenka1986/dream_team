import { useState } from "react";

const MenuButton = ({ setSection }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (sectionName) => {
    setOpen(false);
    if (sectionName !== 'contacts') {
      setSection(sectionName);
    }
  };

  return (
    <>
      <button
        className={`menu-button ${open ? "open" : ""} animate-bounce`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav className="menu animate-slide-down">
          <ul>
            <li><a href="#home" onClick={() => handleClick('home')} className="menu-link">ГЛАВНАЯ</a></li>
            <li><a href="#pizzas" onClick={() => handleClick('pizza')} className="menu-link">ЗАКАЗ</a></li>
            <li><a href="#about" onClick={() => handleClick('about')} className="menu-link">О НАС</a></li>
            <li>
              <a
                href="https://github.com/IharLazarenka1986"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-link"
                onClick={() => setOpen(false)}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuButton;


