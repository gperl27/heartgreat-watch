import * as React from 'react';
import {WorkoutListItem} from "./WorkoutListItem";
import {CompletedWorkoutListITem} from "./CompletedWorkoutListItem";

interface Exercise {
    completed: boolean;
}

interface ActiveWorkout {
    length: number;
    exercises: Exercise[]
    heartRate?: number;
}

export interface Workout {
    id: string;
    name: string;
    activeWorkout?: ActiveWorkout;
}

interface Props {
    workouts: Workout[],
    readonly completedWorkouts: Workout[],
}

export const WorkoutIndex = (props: Props) => {
    const [hasCompletedWorkouts, setHasCompletedWorkouts] = React.useState(props.completedWorkouts.length > 0 || false);

    const renderWorkoutList = () => {
        return props.workouts.map(workout => <WorkoutListItem workout={workout}/>)
    }

    const renderCompletedWorkouts = () => {
        return props.completedWorkouts.map(workout => <CompletedWorkoutListITem workout={workout}/>)
    }

    const CompletedWorkoutsContainer = () => {
        return (
            <div>
                {renderCompletedWorkouts()}
                <button onClick={() => setHasCompletedWorkouts(false)}>go again?</button>
            </div>
        )
    }

    const WorkoutListContainer = () => {
        return (
            <div>
                {renderWorkoutList()}
                <div>Create</div>
            </div>
        )
    }

    return (
        <div>
            <div>date here</div>
            {
                hasCompletedWorkouts ?
                    CompletedWorkoutsContainer() :
                    WorkoutListContainer()
            }
        </div>
    )
}