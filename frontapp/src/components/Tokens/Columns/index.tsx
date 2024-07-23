import "./Columns.css";

export default function Columns(){
    return (
        <div className='coin-container columns'>
          <div className='coin-row'>
            <div className='coin'>
              <p>Name</p>
            </div>
            <div className='coin-data'>
              <p className='coin-price'>Price</p>
              <p className='coin-volume'>Volume(24h)</p>
              <p className="coin-price">1h%</p>
              <p className='coin-marketcap'>Market Cap</p>
            </div>
          </div>
        </div>
      );
}