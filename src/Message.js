import './Message.css'

function Message(props) {
    return ( 
        <div className='Message'>
            <div className='Message-box'>
                <p>Сообщение:</p>
                <p className='PropsMessage'>{props.message}</p>
            </div>
            
        </div>
     );
}
export default Message;