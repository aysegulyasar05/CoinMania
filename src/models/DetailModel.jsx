import {SiCoinmarketcap} from 'react-icons/si';
import { MdEventAvailable } from "react-icons/md";
import { MdPriceChange } from "react-icons/md";
import { RiStockFill} from "react-icons/ri";
import { FaPercent } from "react-icons/fa";


export class DetailModel {
  constructor(coin, history) {
    this.coin = coin;
    // arayüz kutuları için veriyi hazırla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: 'Market Capacity',
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: 'Supply',
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: 'Price',
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: '24Hr Change (%)',
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: '24Hr Volume',
        value: this.coin?.volumeUsd24Hr,
      },
    ];

  }}

  







