import React from "react";
import TheEdge1 from "./TheEdge1";
import BotArmy from "./BotArmy";
import MarketingGlossary from "./MarketingGlossary";

const TheEdgeLayout = () => {
  return (
    <div className="px-[5%] bg-white relative z-[110] py-32 rounded-[70px]">
      <TheEdge1></TheEdge1>
      <BotArmy></BotArmy>
      <MarketingGlossary></MarketingGlossary>
    </div>
  );
};

export default TheEdgeLayout;
