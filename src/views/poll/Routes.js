import React, { lazy, Suspense, memo } from 'react'
import { Switch, Route } from 'react-router-dom'

const AddPoll = lazy(() => import(/* webpackChunkName: "addPoll" */ './AddPoll'))
const List = lazy(() => import(/* webpackChunkName: "listPoll" */ './List'))
const View = lazy(() => import(/* webpackChunkName: "viewPoll" */ './View'))

const Routes = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
                <Route exact path="/poll/add" name="AddPoll" component={AddPoll} />
                <Route exact path="/poll/list" name="List" component={List} />
                <Route exact path="/poll/view/:id" name="View" component={View} />
        </Suspense>
    );
};

export default Routes;