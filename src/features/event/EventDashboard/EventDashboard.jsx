import React, { Component } from 'react'
import { Grid,Button} from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';



export default class EventDashboard extends Component {
                 state = {
                   events: eventsDashboard,
                   isOpen: false,
                   selectedEvent: null
                 };

                 handleFormOpen = () => {
                   this.setState({
                    selectedEvent: null,
                    isOpen: true
                   });
                 };

                 handleCancel = () => {
                   this.setState({
                     isOpen: false
                   });
                 };
                 handleOpenEvent = (eventToOpen) => () => {
                  this.setState({
                    selectedEvent: eventToOpen,
                    isOpen: true
                  });
                };

                 handleCreateEvent = (newEvent) => {
                     newEvent.id = cuid();
                     newEvent.hostPhotoURL = '/assets/user.png';
                     const updatedEvents = [...this.state.events, newEvent];
                     this.setState({
                      events: updatedEvents,
                      isOpen: false
                    });
                 }

                 handleUpdateEvent = (updatedEvent) => {
                  this.setState({
                   events: this.state.events.map(event => {
                     if(event.id === updatedEvent.id){
                       return Object.assign({},updatedEvent);
                     }else {
                       return event;
                     }
                   }),
                   isOpen: false,
                   selectedEvent: null
                 });
              }

            handleDeleteEvent = (eventId) => () => {
                const updatedEvents = this.state.events.filter(e => e.id !== eventId);
                this.setState({
                 events: updatedEvents
               });
            }

              handleDeleteEvent


                 render() {
                   const {selectedEvent} = this.state;
                   return (
                     <Grid>
                       <Grid.Column width={10}>
                         <EventList 
                         deleteEvent={this.handleDeleteEvent}
                         onEventOpen={this.handleOpenEvent} 
                         events={this.state.events} />
                       </Grid.Column>
                       <Grid.Column width={6}>
                         <Button
                           onClick={this.handleFormOpen}
                           positive
                           content="Create Event"
                         />
                         {this.state.isOpen && (
                           <EventForm
                             updateEvent={this.handleUpdateEvent}
                             selectedEvent={selectedEvent}
                             handleCancel={this.handleCancel}
                             createEvent={this.handleCreateEvent}
                           />
                         )}
                       </Grid.Column>
                     </Grid>
                   );
                 }
               }


