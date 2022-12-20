import { Image, Space, Typography, Button, Rate } from "antd";
import cover from "../../img/Rectangle_36.jpg";
import "./card.css";

const { Text } = Typography;

const Title = () => {
  return <h5 className="card__title">The way back</h5>;
};

const Body = () => {
  return (
    <Space className="card__body" direction="vertical" size="small">
      <Space size={110}>
        <Title>The way back</Title>
        <span className="card__digital-rate">6.6</span>
      </Space>
      <Text type="secondary">March 5, 2020 </Text>
      <Space>
        <Button size="small">Action</Button>
        <Button size="small">Drama</Button>
      </Space>
      <Text className="card__description">
        A former basketball all-star, who has lost his wife and family
        foundation in a struggle with addiction attempts to regain his soul and
        salvation by becoming in a struggle with addiction the coach of a
        disparate ethnically mixed high ...
      </Text>
      <Rate allowHalf defaultValue={2.5} count={10} />
    </Space>
  );
};

const Card = () => {
  return (
    <Space className="card" size={20}>
      <Image width={183} src={cover} />
      <Body />
    </Space>
  );
};

export default Card;
