import { emitter } from "../App";

const Button = () => {
    const onIncrementButton = () => {
        emitter.emit('inc');
    };
    const onDecrementButton = () => {
        emitter.emit('dec')
    }

    return(
        <>
        <button onClick={onIncrementButton}>+</button>
        <button onClick={onDecrementButton}>-</button>
        </>
    )
}

export default Button;