import React from 'react';

class OwnerAdd extends React.Component {
    state = {
        name: '',
        nric: '',
        address: '',
        postcode: '',
        state: '',
        telephone: '',
        email: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleClick = (e) => {
        // redux dispatch to add owner
        this.props.history.push('/owner');
    };

    render() {
        return (
            <div id="owner-add">
                <div className="section">
                    <h4>Add Owner</h4>
                    <div className="divider"></div>
                </div>
                <form onSubmit={ this.handleSubmit }>
                    <div className="row">
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="name"></input>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="nric"></input>
                            <label htmlFor="nric">NRIC</label>
                        </div>
                        <div className="input-field col s12 m12 l8">
                            <textarea className="materialize-textarea" id="address"></textarea>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="postcode"></input>
                            <label htmlFor="postcode">Postcode</label>
                        </div>
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="state"></input>
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="telephone"></input>
                            <label htmlFor="telephone">Telephone</label>
                        </div>
                        <div className="input-field col s12 m6 l4">
                            <input type="text" id="email"></input>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                </form>
                <button onClick={ this.handleClick } className="btn">Add</button>
            </div>
        )
    }
}

export default OwnerAdd;