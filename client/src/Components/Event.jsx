import React, { Component } from 'react';
import Participants from './Participants.jsx';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '../styles/event.css';

class Event extends Component {
  constructor(props) {
    super(props);
  }

  getLink(eventId) {
    let link = `http://localhost:3000/join/${eventId}`;
    return link;
  }

  render() {
    return (
      <div className={styles.indEventContainer}>
        <hr />
        <div
          className={styles.title}
          onClick={() => this.props.joinEventIfExists(this.props.event.id)}>
          {this.props.event.title}
        </div>
        <div>{this.props.event.description}</div>
        <CopyToClipboard text={this.getLink(this.props.event.id)}>
          <button>Copy Link</button>
        </CopyToClipboard>
        <Participants participants={this.props.event.participants} />
      </div>
    );
  }
}

export default Event;
