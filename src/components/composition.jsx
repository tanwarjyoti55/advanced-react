export const Button = ({ size, text, color, ...props }) => {
    return (
        <button style={{
            fontSize: size === 'small' ? '8px' : '16px',
            backgroundColor: color,
        }}>{text}</button>
    )
}


export const RedButton = (props) => {
return <Button {...props} color={'red'} />
}

export const GreenButton = (props) => {
    return <Button {...props} color={'green'} size={'small'}/>
 }