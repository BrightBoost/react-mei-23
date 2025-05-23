function List(props) {
    return (
        <>
            <p>Hoi {props.name}</p>
            <p>Job: {props.job}</p>
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </>
    )
}

export default List;