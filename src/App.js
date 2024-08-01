import { useState } from "react";
import "antd/dist/reset.css";
import { ConfigProvider, Popover } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import "./App.css";

dayjs.locale("zh-cn");
dayjs.extend(customParseFormat);

function App() {
  const PopContent = () => (
    <div>
      全部： 所有归属门店以及共享门店包括当前门店的线索
      <br />
      待分配：创建之后，还未分配跟进人的线索
      <br />
      已流失：已被跟进人标记未已流失的线索
      <br />
      无效线索：已被跟进人标记为无效的线索
      <br />
      待跟进：跟进人领取后还未产生跟进记录的线索
      <br />
      已成交：已经创建了包含前期金额订单的线索
      <br />
    </div>
  );

  return (
    <ConfigProvider locale={zhCN}>
      <button>
        全部
        <Popover content={<PopContent />} placement="bottom">
          <InfoCircleOutlined style={{ color: "#0000003f" }} />
        </Popover>
      </button>
    </ConfigProvider>
  );
}

export default App;
