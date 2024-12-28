export function UserInfo({ data, index, handleClick }) {
    return (
        <div style={{width: "100%", display: "flex", alignItems: "center", gap: 30}}>
            <p>{++index})</p>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <button onClick={() => handleClick(data.id)}>Remove</button>
        </div>
    )
}