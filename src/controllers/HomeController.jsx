import { useEffect, useState } from "react";
import HomeView from "../views/HomeView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const HomeController = () => {
  const [coins, setCoins] = useState([]);
  
  const [queryparams, setParams] = useSearchParams();

  const page =Number(queryparams.get('page')) || 1;
  
  const option = {
    params: {
      limit: 15,
      offset: (page -1) *15,
    },
  };

  useEffect(() => {
    axios
      .get("/assets", option)
      .then((res) => setCoins([...coins,...res.data.data]))
      .catch((err) => console.log(err));
  }, [queryparams]);

  return <HomeView coins={coins} />;
};

export default HomeController;
