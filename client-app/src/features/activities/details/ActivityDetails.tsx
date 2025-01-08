import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={`/assets/categoryImages/${activity.category || 'default'}.jpg`}
                alt={activity.category}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {activity.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {activity.date}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {activity.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ButtonGroup>
                    <Button onClick={() => openForm(activity.id)} size='medium' variant="outlined">Edit</Button>
                    <Button onClick={cancelSelectActivity} size='medium' variant="contained">Cancel</Button>
                </ButtonGroup>
            </CardActions>
        </Card>
    )
}