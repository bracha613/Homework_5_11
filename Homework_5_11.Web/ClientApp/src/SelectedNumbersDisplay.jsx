import React from 'react';


class SelectedNumbersDisplay extends React.Component {

    render() {
        const { numbers, onLockChangeClick, lockedNumbersIds } = this.props;
        return <div className="row p-5 rounded mt-5" style={{ backgroundColor: '#E9ECEF' }}>
            <div className="col-md-4">
                <h3>Selected Numbers:</h3>
                <ul className="list-group">
                    {numbers.map(num =>
                        <li className="list-group-item" key={num.id}>
                            {num.number}
                            <button className="btn btn-primary ms-5" onClick={()=>onLockChangeClick(num.id)}>
                                {lockedNumbersIds.includes(num.id) ? "Unlock" : "Lock"}</button>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    }
}

export default SelectedNumbersDisplay;