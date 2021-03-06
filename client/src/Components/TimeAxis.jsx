import React from 'react';
import styles from '../styles/TimeAxis.css';
import TimeAxisUnit from './TimeAxisUnit';

const UNIT_INCREMENTS = 15;

class TimeAxis extends React.Component {
  constructor(props) {
		super(props);
		this.getTimeAxisUnits = this.getTimeAxisUnits.bind(this);
	}
	
	getTimeAxisUnits() {
    let numberOfSlots = (this.props.latestMinutesInDay - this.props.earliestMinutesInDay) / UNIT_INCREMENTS;
    let stub = new Date(0,0,0).getTime();
		let timeAxisUnits = [];
    for (let i = 0; i <= numberOfSlots; i++) {
      let currentTimeStamp = new Date(stub + (this.props.earliestMinutesInDay + i * 15) * 60 * 1000);
			timeAxisUnits.push(<TimeAxisUnit 
				timestamp={currentTimeStamp} 
				numberOfSlots={this.props.numberOfSlots}
				display={i === 0 || i === numberOfSlots }
				/>);
		}
    return timeAxisUnits;
  }


	render() {
    return (
			<div className={styles.container}>
			<div className={styles.placeHolder}></div>
				{this.getTimeAxisUnits()}
			</div>
    );
  }
}

export default TimeAxis;
