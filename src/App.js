import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon';
import './styles/styles.scss'

// Redux 
import { Provider } from 'react-redux'
import store from './store'

// Components
import Formbutton from './components/Formbutton'
import CardsList from './components/CardsList'


function App() {

  const [open, setOpen] = useState(false)   

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };  

  return (
    <Provider store={store}>
      <>
        <div className="container mx-auto">

          <h1 className="text-center main-title" data-testid='title-app'>
            <span className="main-color">Test</span> Capitole FE          
          </h1>    

          <CardsList />

          <Formbutton 
            open={open}           
            handleClose={handleClose}
          />

          <Icon 
            data-testid='btn-add-card'
            className="btn-custom" 
            color="secondary" 
            onClick={handleClickOpen}
          >
            add_circle
          </Icon> 

        </div>
      </>
    </Provider>
  );  
}

export default App;
