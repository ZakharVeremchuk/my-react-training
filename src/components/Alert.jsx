
const alertStyle = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
}
const getBgColor = variant => {
    switch(variant) {
        case 'info':
            return 'blue';
        case 'success':
            return 'green';
        case 'eror':
            return 'red';
        case 'warning':
            return 'orange';
        default:
            throw new Error(`Unsuported variant prop value - ${variant}`);
    }
};


export const Alert = ({variant, children}) => {
    return <p style={{...alertStyle, backgroundColor: getBgColor(variant)}}>{children}</p>;
};