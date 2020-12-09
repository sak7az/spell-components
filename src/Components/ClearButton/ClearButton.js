import React from 'react';
import './ClearButton.css';

class ClearButton extends React.Component {

    onClick(){
        window.location.reload(false);
    }

    render(){
        return (
            <button 
                type='button' 
                className='largeTxt  button'
                onClick={this.onClick}>
                    Clear Search
            </button>
        )
    }

}

export default ClearButton;