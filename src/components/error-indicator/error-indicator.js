import { Alert, Space } from "antd";
import { Offline, Online } from "react-detect-offline";

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Online>
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
        />
      </Online>
      <Offline>
        <Alert
          message="Connection Error"
          description="Internet disconnected"
          type="error"
          showIcon
        />
      </Offline>
    </Space>
  );
};

export default ErrorIndicator;
