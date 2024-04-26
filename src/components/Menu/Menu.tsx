import MenuTab from "../MenuTab/MenuTab";
import styles from "./Menu.module.css";

type SetMenuProps = {
  menuSelectionHandler: React.Dispatch<React.SetStateAction<string>>;
};

const Menu = ({ menuSelectionHandler }: SetMenuProps) => {
  const budgetTotal = 12000;
  const spentTotal = 12000;
  const available = 0;

  return (
    <>
      <div id={styles.container}>
        <div id={styles.amounts}>
          <div className={styles.amountsWrapper}>
            <p>budgeted: </p>
            <span className={styles.dollars}>${budgetTotal}</span>
          </div>
          <div className={styles.amountsWrapper}>
            <p className={styles.spent}>spent: </p>
            <span className={`${styles.spentDollar} ${styles.dollars}`}>
              ${spentTotal}
            </span>
          </div>
          <div className={styles.amountsWrapper}>
            <p className={styles.available}>available: </p>
            <span className={`${styles.availableDollar} ${styles.dollars}`}>
              ${available}
            </span>
          </div>
        </div>
        <div id={styles.wrapper}>
          <MenuTab
            text={"overview"}
            handler={() => menuSelectionHandler("overview")}
          />
          <MenuTab
            text={"budgets"}
            handler={() => menuSelectionHandler("budgets")}
          />
          <MenuTab
            text={"transations"}
            handler={() => menuSelectionHandler("transactions")}
          />
          <MenuTab text={"funds"} 
            handler={() => menuSelectionHandler("funds")}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;