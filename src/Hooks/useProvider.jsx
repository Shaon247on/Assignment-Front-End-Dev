import { useContext } from 'react';
import { StateContext } from '../Provider/ContextProvider';

const useProvider = () => {
    const states = useContext(StateContext)
    return states
};

export default useProvider;