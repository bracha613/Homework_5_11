import React from 'react';
import { produce } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import NumberForm from './NumberForm';
import NumberRow from './NumberRow';
import SelectedNumbersDisplay from './SelectedNumbersDisplay';

class NumberTable extends React.Component {

    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbersIds: []
    }

    getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

    OnAddNumberClick = () => {
        const number = this.getRandomNumber();
        const nextState = produce(this.state, draft => {
            draft.numbers.push({ number, id: uuidv4() });
        });
        this.setState(nextState);
    }

    onSelectClick = (numberObj) => {
        if (this.state.selectedNumbers.includes(numberObj)) {
            const filtered = this.state.selectedNumbers.filter(obj => obj !== numberObj)
            this.setState({ selectedNumbers: filtered });
        }
        else {
            const copy = [...this.state.selectedNumbers, numberObj];
            this.setState({ selectedNumbers: copy });
        }
    }

    onLockChangeClick = (id) => {
        if (this.state.lockedNumbersIds.includes(id)) {
            const filtered = this.state.lockedNumbersIds.filter(l => l !== id)
            this.setState({ lockedNumbersIds: filtered });
        }
        else {
            const copy = [...this.state.lockedNumbersIds, id];
            this.setState({ lockedNumbersIds: copy });
        }
    }

    getContent = () => {
        return <div className="row mt-5">
            <div className="col-md-12" style={{ maxHeight: 500, overflowY: 'scroll' }}>
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((obj) => {
                            const { number, id } = obj;
                            return (<NumberRow
                                key={id}
                                number={number}
                                onSelectClick={() => this.onSelectClick(obj)}
                                isSelected={this.state.selectedNumbers.includes(obj)}
                                isLocked={this.state.lockedNumbersIds.includes(obj.id)}
                            />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                {/*<pre className="bg-dark text-light p-3 rounded overflow-auto">*/}
                {/*    <code>*/}
                {/*        {JSON.stringify(this.state, null, 2)}*/}
                {/*    </code>*/}
                {/*</pre>*/}
                <NumberForm OnAddNumberClick={this.OnAddNumberClick} />
                {this.getContent()}
                {!!this.state.selectedNumbers.length && <SelectedNumbersDisplay
                    numbers={this.state.selectedNumbers}
                    lockedNumbersIds={this.state.lockedNumbersIds}
                    onLockChangeClick={this.onLockChangeClick}
                />}
            </div>
        );
    }
}

export default NumberTable;
