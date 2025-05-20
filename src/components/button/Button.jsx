import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({buttonText, disabled}) {

    return (
        <button onClick={() => console.log(buttonText)} disabled={disabled}>
            {buttonText}
        </button>
    );
}

export default Button;