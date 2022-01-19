import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';

export const Test1 = () => {
  const [eventName, setEventName] = useState('');
  const [listOfPeople, setListOfPeople] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState(
    new Array(listOfPeople.length).fill(false)
  );
  const [eventLog, setEventLog] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let response = await fetch("http://test.seedcode.com/getPeople", {
        method: 'GET',
        headers: {
          "Accept": 'application/jspn',
          "Content-type": "application/json"
        }
      });
      response = await response.json();
      setListOfPeople(response);
      console.log(response);
    }
    fetchPeople();
  }, []);

  const handleTextChange = useCallback((e) => {
    setEventName(e.target.value);
  }, []);

  const handleCheckChange = useCallback((e, person) => {
    const checked = [...selectedPeople];
    if(e.target.checked) {
      checked.push(person);
    } else {
      const index = checked.findIndex((p) => p.id === person.id);
      checked.splice(index, 1);
    }
    setSelectedPeople(checked);
    console.log(checked);
  }, [selectedPeople]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (eventName !== '' && !_.isEmpty(selectedPeople)) {
        let event = { name: eventName, invitees: selectedPeople };
        fetch("http://test.seedcode.com/createEvent", {
          method: 'POST', 
          headers: {
            "Accept": 'application/jspn',
            "Content-type": "application/json"
          },
          body: JSON.stringify(event)
        }).then(response => {
          if(response.ok) {
            alert('Create event successfully');
            let events = [...eventLog];
            events.push({name: event.name});
            setEventLog(events);
          } else {
            throw new Error('Something went wrong');
          }
        }).catch((error) => {
          alert("There was an error creating the event " + error);
        });
      
      setEventName('');
      setSelectedPeople([]);
    }
  }, [eventName, selectedPeople]);

  return (
    <div>
      <h4>Create a new event</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="event">Name of event</label>
        <input type="text" id="event" value={eventName} required onChange={(e) => handleTextChange(e)} />
        {listOfPeople && listOfPeople.map(p => {
          return(
            <div key={p.id}>
              <input type="checkbox" 
              id={p.id}
              checked={selectedPeople.find((s) => s.id === p.id )}
              onChange={(e) => handleCheckChange(e, p)} />
              <label>{p.name}</label>
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
      {!_.isEmpty(eventLog) ? eventLog.map(e => {
        return(
          <div>
            <p>Event created: {e.name}</p>
          </div>
        );
      }) : ''}

    </div>
  );
};
