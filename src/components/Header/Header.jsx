import s from "./Header.module.css";

const imgRef =
  "https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img className={s.img} src={imgRef} alt="123" />{" "}
      </div>
      <div>
        <p className={s.p}> Restaurants guides</p>
      </div>
    </header>
  );
};

export default Header;
