import React,{useState} from "react";
import { Resizable } from "re-resizable";
import AddModal from "../modal/AddModal";
import UpdateModal from "../modal/UpdateModal";
import CountModal from "../modal/CountModal";
import styles from "./NewsComponent.module.css";


const NewsComponent = () => {
    const [news, setNews] = useState()
  return (
    <Resizable
      defaultSize={{
        width: "60vw",
        height: "80vh",
      }}
      className={styles.news}
    >
      <div>
        <h2>New of The Day</h2>
        <h2>{news}</h2>
        <div>
            <AddModal news={news} setNews={setNews} />
            <UpdateModal news={news} setNews={setNews} />
            <CountModal newse={news} />
        </div>
      </div>
    </Resizable>
  );
};

export default NewsComponent;
