import React, { FC, useReducer, PropsWithChildren } from 'react';
import { UIContext, uiReducer } from './';


export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,

};


export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    /**
     * When the user clicks the button, dispatch an action to the reducer to open the sidebar.
     */
    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'});
    }

    const closeSideMenu = () => dispatch({type: 'UI - Close Sidebar'});
    
    const setIsAddingEntry = (isAdding:boolean) => {
        dispatch({type: 'UI - Set isAddingEntry', payload: isAdding})
    }

    /**
     * When the user clicks on the element, dispatch an action to the reducer to update the state.
     */
    const startDragging = () => {
        dispatch({type: 'UI - Start Dragging'});
    }
    const endDragging = () => {
        dispatch({type: 'UI - End Dragging'});
    }

    return (
        <UIContext.Provider value={{
            ...state,
            //Methods
            closeSideMenu,
            openSideMenu,

            setIsAddingEntry,

            startDragging,
            endDragging,
        }}>
            
            {children}
        </UIContext.Provider>
    )
}



