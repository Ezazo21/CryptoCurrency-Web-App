
import './MyCoin.css';

const CustomCoin = ({ image, name, price, volume, pricechange, marketcap }) => {
  return (
    <div className="custom-coin-container">
      <div className="custom-coin-row">
        <div className="custom-coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="custom-coin-symbol"></p>
        </div>
        <div className="custom-coin-data">
          <p className="custom-coin-price">Rs.{price}</p>
          {pricechange<0 ? (
                        <p className="custom-coin-percent red">{pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="custom-coin-percent green">{pricechange.toFixed(2)}%</p>
                    )
                }
          <p className="custom-coin-marketcap">
            Market Cap: Rs.{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCoin;
