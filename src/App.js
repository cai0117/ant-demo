import "antd/dist/reset.css";
import { ConfigProvider, DatePicker, message } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "./App.css";

dayjs.locale("zh-cn");
dayjs.extend(customParseFormat);

function App() {

  const handleDeadlineChange =  (date) => {
    try {
      message.success("截止日期修改成功");
    } catch (error) {
      message.error(error.message);
    }
  };
  return (
    <ConfigProvider locale={zhCN}>
      <DatePicker
        onChange={handleDeadlineChange}
        // popupClassName="leave"
      />
    </ConfigProvider>
  );
}

export default App;
