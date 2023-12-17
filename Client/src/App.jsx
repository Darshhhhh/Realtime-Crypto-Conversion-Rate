import "./App.css";
import PriceSelector from "./components/PriceSelector";

function App() {
  //THIS IS MY DEPLOYED CONTRACT SOME HOW ITS NOT WORKING AND IM GETTING ERRORS SO IM USING SOMEONE ELSE DEPLOYED CONTRACT MY CONTRACT KEEP SAYING   reason: 'insufficient funds for intrinsic transaction cost',
  // code: 'INSUFFICIENT_FUNDS',
  // error: ProviderError: insufficient funds for gas * price + value: balance 0, tx cost 43490076254196957, overshot 43490076254196957
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real-Time Crypto Price Tracker!!</h1>
        <PriceSelector />
      </header>
    </div>
  );
}

export default App;
