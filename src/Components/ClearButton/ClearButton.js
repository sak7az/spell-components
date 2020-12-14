import React from 'react';

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
                    Clear
            </button>
        )
    }

}

export default ClearButton;