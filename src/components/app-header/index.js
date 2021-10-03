import React, { memo } from "react";

import { HeaderWrapper } from "./style";
import { LOGO_URL } from "../../common/contants";
import { headerLinks } from "../../common/local-data";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined, FormOutlined } from "@ant-design/icons";

import { Button, Radio } from "antd";

export default memo(function caAppHeader() {
  return (
    <HeaderWrapper>
      <div className="header">
        <div className="nav-bar">
        <div className="logo">
          <img src={LOGO_URL} alt="" />
        </div>

        <div className="tab-control">
          {headerLinks.map((item, index) => {
            return (
              <div key={item.title}  className="item">
                <NavLink to={item.link}>
                  <i className={"iconfont " + item.icon}></i>
                  {item.title}
                </NavLink>
              </div>
            );
          })}
        </div>
        </div>

        <div className="main-bar">
          <div className="search">
            <Input
              className="search_btn"
              allowClear="true"
              placeholder="大家都在搜..."
              prefix={<SearchOutlined />}
            />
          </div>

          <div className="write">
            <Button
              type="primary"
              shape="round"
              icon={<FormOutlined />}
              size="middle"
            >
              写文章
            </Button>
          </div>

          <div className="user">
              <div className='login_btn'>登录</div>
              <div>注册</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
});
