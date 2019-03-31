import {Workout} from "./WorkoutIndex";
import * as React from "react";

interface Props {
    workout: Workout
}

export const CompletedWorkoutListITem = (props: Props) => {
    return (
        <div>
            <div>Workout completed!</div>
            <div>caret to see short details of completed workout</div>
            <button>click me to see FULL stats</button>
        </div>
    )
}

