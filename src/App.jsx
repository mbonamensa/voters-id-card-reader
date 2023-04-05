import Uploader from "./Uploader"






function App() {


  return(
    <div className="app">
      <div className="home">
        <div className="welcome">
          <h1>Welcome to the Voters ID Reader</h1>
          <p>Quickly extract information from your voter's ID and have it  downloaded in a pdf.</p>
        </div>
        <Uploader />
        {/* <button>Extract</button> */}
      </div>
    </div>
  )
}

export default App
