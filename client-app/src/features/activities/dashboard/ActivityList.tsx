import { Button, Chip, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import { Fragment } from "react/jsx-runtime";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {activities.map(activity => (
                <Fragment key={activity.id}>
                    <ListItem>
                        <ListItemText>
                            <Typography gutterBottom variant='h5' component='div'>
                                {activity.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {activity.date}
                            </Typography>
                            <Typography>
                                {activity.description}
                            </Typography>
                            <Typography>
                                {activity.city}, {activity.venue}
                            </Typography>
                            <Chip label={activity.category} variant="outlined" />
                        </ListItemText>
                        <Stack direction="row" spacing={2}>
                            <Button onClick={() => selectActivity(activity.id)} size='medium' sx={{ marginLeft: "auto" }} variant="contained">View</Button>
                            <Button onClick={() => deleteActivity(activity.id)} size='medium' sx={{ marginLeft: "auto" }} variant="contained" color="error">Delete</Button>
                        </Stack>
                    </ListItem>
                    <Divider />
                </Fragment>
            ))}
        </List>
    )
}