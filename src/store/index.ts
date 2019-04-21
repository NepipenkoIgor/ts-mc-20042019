import { AnyAction, applyMiddleware, compose, createStore, Store, StoreEnhancer } from 'redux';
import { IStore, rootReducers } from './reducers';
import { rootEpics } from './epics';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';


declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: { name: string }) => typeof compose;

const rootEpicsMiddleware: EpicMiddleware<AnyAction> = createEpicMiddleware();

const composeEnhancers: typeof compose =
    typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            name: 'TypeScript masterclass'
        }) : compose;

const enhancer: StoreEnhancer = composeEnhancers(
    applyMiddleware(rootEpicsMiddleware),
    // other store enhancers if any
);


export const store: Store<IStore> = createStore(rootReducers, enhancer);

rootEpicsMiddleware.run(rootEpics);
