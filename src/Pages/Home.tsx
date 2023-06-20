import React from "react";
import { MenuItemList } from "../Components/Layout/Page/Home";
import { Banner } from "../Components/Layout/Page/Common";

function Home() {
  return (
    <div>
      <Banner />
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;
