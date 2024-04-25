import { useState} from 'react';

const SimpleCounter = () => {
    const[count, setCount] = useState(0);

    const handleMinus = () =>{
        setCount(count -1);
    }

    const handlePlus = () =>{
        setCount((prevState) => prevState + 1);
    
    }  
    return (
        <div className="counter_container">
            <div className="counter_number">
                <h1>{count}</h1>
            </div>
            <div className="counter_button">
                <button onClick={handleMinus}>-</button>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    )
}

export default SimpleCounter;