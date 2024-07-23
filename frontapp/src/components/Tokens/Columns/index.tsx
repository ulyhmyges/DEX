

export default function Columns(){
    return (
        <div className='coin-container'>
          <div className='coin-row'>
            <div className='coin'>
              <p>Logo</p>
              <h1>Name</h1>
              <p>Symbol</p>
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