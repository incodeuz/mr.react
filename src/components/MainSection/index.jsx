import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;

const MainSection = ({ kinolar }) => {
  return (
    <div className="home-wrapper">
      {kinolar.map((kino) => (
        <Card
          style={{
            width: 300,
          }}
          cover={<img alt={kino.title} src={kino.image} />}
          actions={[
            <span>{kino.views}</span>,
            <span>{kino.price}</span>,
            <span>{kino.duration}</span>,
          ]}
        >
          <Meta title={kino.title} description={kino.desc} />
        </Card>
      ))}
    </div>
  );
};

export default MainSection;
