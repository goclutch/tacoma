// External Imports
import React, { Component } from 'react';
import AssignmentIcon from '@material-ui/icons/AssignmentInd';
import CompletedReports from '@material-ui/icons/AssignmentTurnedIn';
// Internal Imports
import MetricGroup from './metricGroup';

class Reporting extends Component {
  render() {
    const metrics = [
      {
        title: 'Available Reports',
        linkTo: '/reports-assign',
        count: 3,
        icon: AssignmentIcon
      },
      {
        title: 'Completed Reports',
        linkTo: '/reports-completed',
        count: 0,
        icon: CompletedReports
      }
    ];
    return <MetricGroup metrics={metrics} title="Reporting" />;
  }
}

export default Reporting;
