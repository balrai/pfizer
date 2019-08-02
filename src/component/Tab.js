import React from "react";

export default ({ active, children, changeTab, tab }) => {
  function clickHandler() {
    return changeTab(tab);
  }
  return (
    <div className={active ? "active tab" : "tab"} onClick={clickHandler}>
      {children}
    </div>
  );
};
