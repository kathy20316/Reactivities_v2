import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Icon, List, ListItem } from '@mui/material';

function App() {
  // each component can have its own state
  const [activities, setActivities] = useState([]);

  // fetch data from API
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);


  return (
    <div>
      <h1>Reactivities</h1>
      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>
            {activity.title}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default App
