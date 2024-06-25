function NavList({ navbar, classname }) {
  return (
    <ul className={classname} style={{ right: navbar ? "-200px" : "0px" }}>
      <li>Products</li>
      <li>Contact Us</li>
      <li>About</li>
      <li>Home</li>
    </ul>
  );
}

export default NavList;
