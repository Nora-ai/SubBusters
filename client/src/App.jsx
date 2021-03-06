import React from 'react'
import './App.css'
import Login from './screens/Login/Login'
import WelcomePage from './screens/WelcomePage/WelcomePage'
import SubscriptionCreate from './screens/SubscriptionCreate/SubscriptionCreate'
import SubscriptionDelete from './screens/SubscriptionDelete/SubscriptionDelete'
import SubscriptionUpdate from './screens/SubscriptionUpdate/SubscriptionUpdate'
import Subscriptions from './screens/Subscriptions/Subscriptions'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (<>
    <div>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route exact path='/login' component={Login}/> 
        <Route exact path='/subscriptions' component={Subscriptions}/>
        <Route path='/add-subscription' component={SubscriptionCreate}/>
        <Route exact path='/subscriptions/:id/update' component={SubscriptionUpdate}/>
        <Route exact path='/subscriptions/:id' component={SubscriptionDelete} />
      </Switch>
    </div>
  </>)
}

export default App
