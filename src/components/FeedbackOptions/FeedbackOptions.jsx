const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const buttons = options.map(button => <button key={button} onClick={() => onLeaveFeedback(button)}>{ button }</button>)
    return (
        <>
            {buttons}
            {/* <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button> */}
        </>
    )
}
 
export default FeedbackOptions;