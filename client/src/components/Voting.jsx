import React from 'react';
import Vote from './Vote';
import Winner from './Winner';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export class Voting extends React.Component {
	render() {
		return (<div className="voting">
				{this.props.winner ? <Winner ref="winner" winner={this.props.winner} />: 
					<Vote {...this.props} />}
				</div>);
	}

}

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote','pair']),
		hasVoted: state.get('hasVoted'),
		winner: state.get('winner')
	};
}

export const VotingContainer = connect(mapStateToProps,actionCreators)(Voting);