import React from 'react';

class NumberForm extends React.Component {
    render() {
        return (
            <div className="row" style={{marginTop: 30} }>
                <div className="col-md-12">
                    <button className="btn btn-success btn-lg w-100" onClick={this.props.OnAddNumberClick}>Add Number</button>
                </div>
            </div>
        );
    }
}
export default NumberForm;
