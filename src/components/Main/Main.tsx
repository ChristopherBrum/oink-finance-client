import { useState } from "react";

import Menu from "../Menu/Menu";
import Overview from "../Overview/Overview";
import Budgets from "../Budgets/Budgets";
import Transactions from "../Transactions/Transactions";
import Funds from "../Funds/Funds";

const Main = () => {
  const [menuSelection, setMenuSelection] = useState("overview");

  const renderComponent = () => {
    switch (menuSelection) {
      case "overview":
        return <Overview />;
      case "budgets":
        return <Budgets />;
      case "transactions":
        return <Transactions />;
      case "funds":
        return <Funds />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <Menu menuSelectionHandler={setMenuSelection}/>
      {renderComponent()}
    </>
  );
};

export default Main;
