import { Alert, Space } from "antd";

const ErrorIndicator = ({ errorMessage }) => {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert message="Error" description={errorMessage} type="error" showIcon />
    </Space>
  );
};

export default ErrorIndicator;
