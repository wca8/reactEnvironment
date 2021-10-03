import React, { memo } from "react";
import { TabcontrolWrapper } from "./style";
import { indexMenu } from "@/common/local-data";
import { NavLink } from "react-router-dom";

export default memo(function TabControl() {
  return (
    <TabcontrolWrapper>
      <div className="tab-control">
        {indexMenu.map((item, index) => {
          return (
            <div key={item.title} className="item">
              <NavLink to={item.link}>
                {item.title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </TabcontrolWrapper>
  );
});
