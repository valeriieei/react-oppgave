import styles from "./Menu.module.css";

function Menu(props) {
  const menuItems = props.items;
  const itemsMenu = menuItems.map((item) => (
    <li key={item.id} className={styles.menuContainer}>
      <div className={styles.infoMenu}>
        <h4>{item.title}</h4>
        <h3>{item.price}</h3>
        <p>{item.ingredients}</p>
      </div>
      <img src={item.image} alt={item.title} className={styles.itemImage} />
    </li>
  ));

  return <ul className={`${styles.menuGrid}`}>{itemsMenu}</ul>;
}

export default Menu;
