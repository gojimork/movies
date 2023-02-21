import { Image, Space, Typography, Button, Rate } from "antd";
import { format } from "date-fns";
import MovieApiService from "../../services";
import "./card.css";

const { Text } = Typography;
const movieApiService = new MovieApiService();

const onRateChange = (movieId, sessionId, rate) => {
  movieApiService
    .rateMovie(movieId, sessionId, rate)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((body) => console.log(body));
};

const Card = ({
  movieId,
  title,
  poster,
  vote,
  release,
  description,
  guestSessionId,
}) => {
  return (
    <Space className="card" size={20}>
      <Image
        width={183}
        src={poster ? `https://image.tmdb.org/t/p/w200/${poster}` : null}
      />
      <Space className="card__body" direction="vertical" size="small">
        <div className="card__title-wrap">
          <h5 className="card__title">{title}</h5>
          <span className="card__digital-rate">{vote.toFixed(1)}</span>
        </div>
        <Text type="secondary">
          {release ? format(new Date(release), "d MMMM, y") : null}
        </Text>
        <Space>
          <Button size="small">Action</Button>
          <Button size="small">Drama</Button>
        </Space>
        <Text className="card__description" ellipsis={false}>
          {description}
        </Text>
        <Rate
          allowHalf
          count={10}
          onChange={(e) => onRateChange(movieId, guestSessionId, e)}
        />
      </Space>
    </Space>
  );
};

export default Card;
