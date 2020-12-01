import React from 'react'
import './styles/styles.scss'

// Redux 
import { Provider } from 'react-redux'
import store from './store'

// Components
import Formbutton from './components/Formbutton'
import CardsList from './components/CardsList'


function App() {
  return (
    <Provider store={store}>
      <>
        <div className="container mx-auto">
          <h1 className="text-center">Test Capitole FE</h1>          
          <CardsList />
          <Formbutton />
        </div>
      </>
    </Provider>
  );  
}

export default App;
