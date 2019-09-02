import React from 'react';
import { Link } from 'react-router-dom';

const OwnerList = (props) => {
    const { owners } = props;
    return (
        <div id="owner">
            <h1>Owner</h1>
            <div className="divider"></div>
            { owners ? 
                <ul className="collection">
                {owners.map((owner) => {
                    return (
                    <Link to={ '/owner/' + owner.id } className="collection-item" key={ owner.id }>
                        owner.name
                    </Link>
                    )
                })}
                </ul>
            :
            <p className="center">No owner added.</p>
            }
            <div className="fixed-action-btn">
                <Link to="/owner/add" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>
        </div>
    )
}

export default OwnerList;