import React from 'react'

const DisplayText = ({ value }) => {

    if (value === 'NEG') {
        return (
            <div className='lead'>
            Its a Negative Sentiment.
            </div>
        )
    }
    else if (value === 'POS') {
        return (
            <div className='lead'>
            Its a Positive Sentiment.
            </div>
        )
    }
    else {
        return (
            <div className='lead'>
            Cannot Determine This One.
            </div>
        )
    }

}

export default DisplayText