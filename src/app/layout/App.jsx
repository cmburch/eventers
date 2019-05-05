import React,{Component} from 'react';
import { Container } from "semantic-ui-react";
import { Route,Switch } from 'react-router-dom';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import HomePage from '../../features/home/HomePage';
import ModalManager from '../../features/modals/ModalManager';
import TestComponent from '../../features/testarea/TestComponent';
class App extends Component {
  render(){
     return (
       <div>
          <ModalManager/>
         <Switch>
            <Route path="/" exact component={HomePage} />
         </Switch>

         <Route path="/(.+)" render={()=> (
          <div>
           <NavBar />
           <Container className="main">
             <Switch>
               <Route path="/events" component={EventDashboard} />
               <Route path="/test" component={TestComponent} />
               <Route path="/event/:id" component={EventDetailedPage}/>
               <Route path="/manage/:id" component={EventForm}/>
               <Route path="/people" component={PeopleDashboard} />
               <Route path="/profile/:id" component={UserDetailedPage} />
               <Route path="/settings" component={SettingsDashboard} />
               <Route path="/createEvent" component={EventForm} />
             </Switch>
           </Container>
         </div>
         )} />     
       </div>
     ); 
  }
}

export default App;

