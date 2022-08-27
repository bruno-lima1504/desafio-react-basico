
const Text = ({children, color}) => {
    return (
        <div className='text' style={{backgroundColor: color, textTransform: 'uppercase'}}
        >
            {children}    
        </div>
    )

}

export default Text;