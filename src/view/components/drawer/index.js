import React from 'react';
import Drawer from '../../containers/drawer';
import SnackBar from '../../containers/snackbar';

const AppDrawer = ContentComponent => props => (
  <div style={{ display: 'flex' }}>
    <Drawer {...props} />
    <main
      style={{
        width: 'calc(100% - 250)',
        flex: 7,
        backgroundColor: '#eeeeee',
        marginRight: 16
      }}
    >
      <ContentComponent {...props} />
      <SnackBar />
    </main>
  </div>
);

export default AppDrawer;
