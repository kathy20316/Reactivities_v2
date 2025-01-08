import { Grid2 } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, deleteActivity,
    selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit }: Props) {
    return (
        <Grid2 display="flex">
            <Grid2 width="60%">
                <ActivityList 
                  activities={activities} 
                  selectActivity={selectActivity} 
                  deleteActivity={deleteActivity}
                />
            </Grid2>
            <Grid2 width="10%">
            </Grid2>
            <Grid2 width="30%">
                {selectedActivity && !editMode &&
                <ActivityDetails 
                  activity={selectedActivity} 
                  cancelSelectActivity={cancelSelectActivity} 
                  openForm={openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
            </Grid2>


        </Grid2>



    )
}