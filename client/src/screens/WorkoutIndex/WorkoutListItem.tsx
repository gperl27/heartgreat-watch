import {Workout} from "./WorkoutIndex";
import * as React from "react";

interface Props {
    workout: Workout
}

export const WorkoutListItem = (props: Props) => {
    const {workout} = props;

    const getExerciseCompletions = () => {
        if (!workout.activeWorkout) {
            return null;
        }

        const completedExercises = workout.activeWorkout.exercises
            .filter(exercise => exercise.completed)
            .length;

        return `${completedExercises}/${workout.activeWorkout.exercises.length}`
    };

    return (
        <div>
            <div>{workout.name}</div>
            {
                workout.activeWorkout &&
                <div>
                    <div>Comp: {getExerciseCompletions()}</div>
                    <div>Length: {workout.activeWorkout.length}</div>
                    <div>HR: {workout.activeWorkout.heartRate}</div>
                </div>
            }
        </div>
    )
}

