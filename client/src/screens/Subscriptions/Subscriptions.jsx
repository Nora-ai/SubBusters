import React, { Component }from 'react'
import './Subscriptions.css'
import Layout from '../../components/shared/Layout/Layout'
import SubscriptionInfo from '../../components/SubscriptionInfo/SubscriptionInfo'
import { Link } from 'react-router-dom'
import { getSubscriptions } from '../../services/subscriptions'
import profilePic from '../../assets/images/profilePic.png'



class Subscriptions extends Component {
  constructor() {
    super()
    this.state = {
      allSubscriptions: []
    }
  }

  async componentDidMount(){
    const allSubscriptions = await getSubscriptions()
    this.setState({
      allSubscriptions: allSubscriptions
    })
  }
 
  render() {
    const musicList = this.state.allSubscriptions.filter(sub => sub.category === 'Music').map((entertainment, index)=>
      <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.charge} billingDate={entertainment.lastUsed} amount={entertainment.amount} key={index} />
    )

    const moviesList = this.state.allSubscriptions.filter(sub => sub.category === 'Movies and TV').map((entertainment, index)=>
    <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.charge} billingDate={entertainment.lastUsed} amount={entertainment.amount} key={index} />
    )
    
    const softwareList = this.state.allSubscriptions.filter(sub => sub.category === 'Software').map((entertainment, index)=>
    <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.charge} billingDate={entertainment.lastUsed} amount={entertainment.amount} key={index} />
    )
    
    const gamingList = this.state.allSubscriptions.filter(sub => sub.category === 'Gaming').map((entertainment, index)=>
    <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.charge} billingDate={entertainment.lastUsed} amount={entertainment.amount} key={index} />
    )

    const newsList = this.state.allSubscriptions.filter(sub => sub.category === 'News').map((entertainment, index)=>
    <SubscriptionInfo _id={entertainment._id} logoURL={entertainment.logoURL} name={entertainment.charge} billingDate={entertainment.lastUsed} amount={entertainment.amount} key={index} />
  )



    
  return (
    <Layout>
      <div className="user-header"><img src={`${profilePic}`}/><h3 className="user-greeting">Whoa, Jamie</h3></div>
      <div classname="body-subscriptions">
        <section className="subscriptions-alert">
          <span>
            We've found subscriptions you haven't used for a while on this device.
           </span>
          <span>
            If you've been using them in other places that's cool, just close out the table.
            </span>
          <span>
            If these are Ghost Subscriptions,click the subscription to find out how to cancel.
            </span>
        </section>

        
        <div>
          {moviesList}
        </div>
        <div>
          {musicList}
        </div>
        <div>
          {softwareList}
        </div>
        <div>
          {gamingList}
        </div>
        <div>
          {newsList}
        </div>
        
        
        <div className="add-subscription-link-button">
          <button >
            <Link to='./add-subscription'>
              Add Subscription
          </Link>
          </button>
        </div>
      </div>
    </Layout>
  )
}
}

export default Subscriptions