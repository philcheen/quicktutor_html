import { useRef } from "react";
function usePreviousState(state) {
    let ref = useRef();
    let oldValue = ref.current;
    ref.current = state;
    return oldValue;
}
export default usePreviousState;