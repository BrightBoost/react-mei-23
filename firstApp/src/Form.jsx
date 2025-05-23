import { useState } from 'react'

function Form() {
    const [naam, setNaam] = useState("");
    const [ingediendeNaam, setIngediendeNaam] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setIngediendeNaam(naam);
        setNamen(...namen, naam);
        setNaam("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={naam} onChange={e => setNaam(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
            {ingediendeNaam && (<p>Ingediende naam: {ingediendeNaam}</p>)}
        </>
    );
}

export default Form;