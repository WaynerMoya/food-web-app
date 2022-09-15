
/* Importing the Header component from the Header folder. */
import Header from './components/Header/Header';

/* Importing the Footer component from the Footer folder. */
import Footer from './components/Footer/Footer'

/* Importing the Dashboard component from the Dashboard folder. */
import Dashboard from './components/Dashboard/Dashboard';

/* Importing the CSS file. */
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Dashboard />
      
      <Footer />
  
    </div>
  )
}

/* Exporting the App component. */
export default App;
