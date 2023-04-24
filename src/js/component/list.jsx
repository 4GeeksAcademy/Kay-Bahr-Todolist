import React, {useState} from "react";

const List = () => {
	const [inputValue, setInputValue ] = useState('');
    
    const validateInput = () => {
		if(inputValue === "") alert("The input cannot be empty")
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">todos</h1>
    		<div>
        		<input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
        		<button onClick={validateInput} />
    		</div>
		</div>
	);
};

export default List;
