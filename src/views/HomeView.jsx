import { FaBitcoin } from "react-icons/fa";
import millify from "millify";
import CardView from "./CardView";
import LoadMoreView from "./LoadMoreView";
import { useNavigate } from "react-router-dom";
import LoadMoreController from "../controllers/LoadMoreController";


const HomeView = ({ coins }) => {
   const navigate = useNavigate();

  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome,CoinList</span>
      </h4>
      <p>
        CoinList provides a platform for digital asset companies to run their
        token sales. The mission is to help early adopters drive the success of
        the best crypto projects in the world. This can be done by empowering
        communities to invest in and trade new digital assets and develop on top
        of their networks.
      </p>
      <div className="d-flex gap-4 justify-content-around">
        {coins.slice(0, 3).map((data, i) => (
          <CardView key={i} data={data} />
        ))}
      </div>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>Fiyat</th>
            <th>Market Capacity</th>
            <th>Volume (24h)</th>
            <th>%Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin,i) => (
            <tr key={i} onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-2">{coin.symbol}</span>
                <span className="text-nowrap text-truncate">{coin.name}</span>
              </td>
              <td>${millify(coin.priceUsd)}</td>
              <td>${millify(coin.marketCapUsd)}</td>
              <td>${millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr > 0 ? "up" : "down"}>
                {millify(coin.changePercent24Hr)} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <LoadMoreController />
    </div>
  );
};

export default HomeView;
