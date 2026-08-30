import React from 'react';

class NumberRow extends React.Component {

	render() {
		const { number, onSelectClick, isSelected, isLocked} = this.props;
		return <tr>
			<td>{number}</td>
			<td>
				<button className={`btn btn-${isSelected ? 'danger' : 'primary'}`}
					onClick={onSelectClick} disabled={isLocked}>
					{isSelected ? 'Remove from Selected' : 'Add to Selcted'}
				</button>
			</td>
		</tr>

	}
}

export default NumberRow;