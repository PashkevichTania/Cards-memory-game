import { ToastContainer } from 'react-toastify'
import Home from 'pages/Home'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
