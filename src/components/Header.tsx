import React from "react";
import { PageHeader, Dropdown, Button, Menu } from "antd";
import { MoreOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button
    type="text"
    icon={
      <MoreOutlined
      style={{
        fontSize: 20,
      }}
      />
    }
    />
  </Dropdown>
  );

export interface IHeaderProps {
  title: String
};

const Header: React.FC<IHeaderProps> = props =>
{
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={props.title}
      extra={[<DropdownMenu key="more" />]}
    />
  )
}

export default Header;