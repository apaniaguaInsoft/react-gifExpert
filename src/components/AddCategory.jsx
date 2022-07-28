import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };


    const onSubmit = (event) => {
        event.preventDefault();

        const valueTrim = inputValue.trim();
        if (valueTrim.length <= 1) return;

        onNewValue(valueTrim);
        setInputValue('');

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={inputValue} onChange={onInputChange} />
        </form>
    )
}
