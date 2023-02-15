import { Image, Space, Typography, Button, Rate } from "antd";
import { format } from "date-fns";
import "./card.css";

const { Text } = Typography;

const Card = ({ title, poster, vote, release, description }) => {
  return (
    <Space className="card" size={20}>
      <Image
        width={183}
        src={poster ? `https://image.tmdb.org/t/p/w200/${poster}` : ""}
      />
      <Space className="card__body" direction="vertical" size="small">
        <div className="card__title-wrap">
          <h5 className="card__title">{title}</h5>
          <span className="card__digital-rate">{vote}</span>
        </div>
        <Text type="secondary">
          {release ? format(new Date(release), "d MMMM, y") : ""}
        </Text>
        <Space>
          <Button size="small">Action</Button>
          <Button size="small">Drama</Button>
        </Space>
        <Text className="card__description" ellipsis={false}>
          {description}
        </Text>
        <Rate allowHalf defaultValue={vote} count={10} />
      </Space>
    </Space>
  );
};

export default Card;
