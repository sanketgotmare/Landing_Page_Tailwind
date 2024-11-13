import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-4 py-3 flex flex-col gap-16" >
      <Header/>
      <Body/>
      <Footer/>
      </div>
    </>
  )
}

export default App
