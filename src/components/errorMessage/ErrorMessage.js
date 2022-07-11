import img from './error.gif';

const ErrorMessage = () => {
    return (
        // <img alt='errorMessage' src={process.env.PUBLIC_URL + '/error.gif'}/>    
        //когда работаешь с папкой public
    <img style={{display: 'block', width: 250, height: 250, objectFit: 'contain', margin: '0 auto'}} 
    src={img} alt="" />
    )
}

export default ErrorMessage;