import React, {Component, ReactDOM} from 'react';
import './App.css';
import {createMemoryNavigation, mount, route} from "navi";
import {Link, Router, View} from "react-navi";
import {Workout, WorkoutIndex} from "./screens/WorkoutIndex/WorkoutIndex";

const mockCompletedWorkouts: Workout[] = [
    {
        id: '1',
        name: 'Exercise 1'
    }
];
const mockDailyWorkouts: Workout[] = [
    {
        id: '2',
        name: 'Completed Exercise 2',
        activeWorkout: {
            length: 100,
            exercises: [],
            heartRate: 95
        }
    }
];

const routes =
    mount({
        '/': route({
            view: (
                <WorkoutIndex
                    completedWorkouts={mockCompletedWorkouts}
                    workouts={mockDailyWorkouts}/>
            ),
        }),
        '/test': route({
            view: <div>page 2</div>
        })
    });

let navigation = createMemoryNavigation({
    routes,
    url: '/',
})


const App = () => {
    return (
        <Router navigation={navigation}>
            <React.Suspense fallback={() => <div>loading...</div>}>
                <View/>
            </React.Suspense>
            <div>
                <Link href='/'>
                    Link 1
                </Link>
                <Link href='/test'>
                    Link 2
                </Link>
            </div>
        </Router>
    )
};

// const App = () => <div>hello world</div>


export default App;
