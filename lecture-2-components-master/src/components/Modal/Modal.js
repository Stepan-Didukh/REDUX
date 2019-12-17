import React, { Component } from 'react';
import { bool, func, node, oneOfType, string, arrayOf, object } from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }
    }
  }
});
export class Modal extends Component {
  render() {
    const { isOpen, maxWidth, handleModalToggle, children, ariaLabelledby, ariaDescribedby, fullWidth } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Dialog
          open={!!isOpen}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
          onClose={handleModalToggle}
          aria-labelledby={ariaLabelledby}
          aria-describedby={ariaDescribedby}
          scroll="paper"
        >
          {children}
        </Dialog>
      </MuiThemeProvider>
    );
  }
}
Modal.propTypes = {
  isOpen: oneOfType([bool, string, object]).isRequired,
  maxWidth: oneOfType([bool, string]),
  handleModalToggle: func.isRequired,
  ariaLabelledby: string,
  ariaDescribedby: string,
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  fullWidth: bool
};
Modal.defaultProps = {
  ariaLabelledby: 'alert-dialog-slide-title',
  ariaDescribedby: 'alert-dialog-slide-description',
  maxWidth: false,
  fullWidth: false
};