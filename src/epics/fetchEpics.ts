import 'rxjs';
import * as Rx from 'rxjs';
import { ActionsObservable, Epic } from 'redux-observable'
import { State, ActionObject } from '../types'
import { AT } from '../types/ActionTypes'
import { BlisAppBase, BlisAppMetaData, BlisAppList, EntityBase, EntityMetaData, EntityList, ActionBase, ActionMetaData, ActionList, ActionTypes } from 'blis-models';
import { getAllBlisApps, getAllEntitiesForBlisApp, getAllActionsForBlisApp, getAllSessionsForBlisApp, getAllTeachSessionsForBlisApp } from "./apiHelpers";
import { fetchApplicationsFulfilled, fetchAllEntitiesFulfilled, fetchAllActionsFulfilled } from '../actions/fetchActions'
import { setErrorDisplay } from '../actions/displayActions'

export const fetchApplicationsEpic: Epic<ActionObject, State> = (action$: ActionsObservable<ActionObject>): Rx.Observable<ActionObject> => {
    return action$.ofType(AT.FETCH_APPLICATIONS_ASYNC)
        .flatMap((action: any) => 
            getAllBlisApps(action.key, action.userId));
}

export const fetchEntitiesEpic: Epic<ActionObject, State> = (action$: ActionsObservable<ActionObject>): Rx.Observable<ActionObject> => {
    return action$.ofType(AT.FETCH_ENTITIES_ASYNC)
        .flatMap((action: any) =>
            getAllEntitiesForBlisApp(action.key, action.blisAppID)
        );       
}

export const fetchActionsEpic: Epic<ActionObject, State> = (action$: ActionsObservable<ActionObject>): Rx.Observable<ActionObject> => {
    return action$.ofType(AT.FETCH_ACTIONS_ASYNC)
        .flatMap((action: any) =>
            getAllActionsForBlisApp(action.key, action.blisAppID)
        );
}

export const fetchChatSessionsEpic: Epic<ActionObject, State> = (action$: ActionsObservable<ActionObject>): Rx.Observable<ActionObject> => {
    return action$.ofType(AT.FETCH_CHAT_SESSIONS_ASYNC)
        .flatMap((action: any) =>
            getAllSessionsForBlisApp(action.key, action.blisAppID)
        );
}

export const fetchTeachSessionsEpic: Epic<ActionObject, State> = (action$: ActionsObservable<ActionObject>): Rx.Observable<ActionObject> => {
    return action$.ofType(AT.FETCH_TEACH_SESSIONS_ASYNC)
        .flatMap((action: any) =>
            getAllTeachSessionsForBlisApp(action.key, action.blisAppID)
        );
}
