import { React, useState } from 'react';
const App = () => {
    let [message, setmessage] = useState("");

    const [count, setCount] = useState(0);
    const incrementer = () => {

        setCount(count + 1);
    }
    const decrementor = () => {
        if (count < 1) {
            message = "";
            setmessage(`${message}Count cant be less than 0`);
        } else
            setCount(count - 1);

    }

    return (
        <>
            <div style={{ textAlign: 'center', alignContent: 'center', marginTop: 20 }}>

                {count}
                <br />
                <button onClick={incrementer}> Increase</button>
                <button onClick={decrementor}>Decrease</button>
                <br />
                {message}
            </div>
        </>
    )
}

export default App