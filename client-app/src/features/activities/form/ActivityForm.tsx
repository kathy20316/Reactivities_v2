import React from "react";
import { Button, Card, CardActions, TextField } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit }: Props) {

    const initialValues = selectedActivity ?? {
        id: '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialValues);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Prevent the default form submission behavior
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

    return (
        <Card variant="outlined" sx={{ padding: 2 }}>
            <form onSubmit={handleSubmit} autoComplete="off">
                    <TextField label="Title" value={activity.title} name="title" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <TextField label="Description" value={activity.description} name="description" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <TextField label="Category" value={activity.category} name="category" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <TextField label="Date" value={activity.date} name="date" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <TextField label="City" value={activity.city} name="city" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <TextField label="Venue" value={activity.venue} name="venue" variant="outlined" margin="dense" fullWidth onChange={handleInputChange}/>
                    <CardActions sx={{ justifyContent: "flex-end" }}>
                        <Button onClick={closeForm} size='medium' variant="outlined">Cancel</Button>
                        <Button size='medium' variant="contained" type="submit">Submit</Button>
                    </CardActions>
            </form>
        </Card>
    )
}
