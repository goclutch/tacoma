import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  fieldWrapper: {
    color: 'rgba(0, 0, 0, 0.87)',
    display: 'inline-flex',
    position: 'relative',
    fontSize: '1rem',
    lineHeight: '1.1875em',
    width: '80%'
  }
});

const renderChildren = ({
  getInputProps,
  getSuggestionItemProps,
  suggestions
}) => (
  <div className="autocomplete-root">
    <Input fullWidth {...getInputProps()} placeholder={'Enter an Address'} />
    <div className="autocomplete-dropdown-container">
      {suggestions.map(suggestion => (
        <div
          {...getSuggestionItemProps(suggestion)}
          style={{ border: '1px solid', borderColor: 'rgba(0,0,0,0.25)' }}
        >
          <span style={{ margin: '5px' }}>{suggestion.description}</span>
        </div>
      ))}
    </div>
  </div>
);
const renderChildrenWithStyles = withStyles(styles)(renderChildren);
const searchOptions = {
  types: ['address']
};

class PlaceField extends Component {
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        this.props.onSuggestionSelected(results[0]);
      })
      .catch(error => console.error('Error', error));
  };
  render() {
    const {
      input,
      label,
      onSuggestionSelected,
      meta,
      classes,
      ...rest
    } = this.props;
    const { touched, error } = meta;
    const hasError = touched && error;
    const id = input.name;
    return (
      <div className={classes.fieldWrapper}>
        <label className={classes.fieldLabel} htmlFor={id}>
          {label}
        </label>
        <div style={{ width: '100%' }}>
          <PlacesAutocomplete
            id={id}
            onSelect={this.handleSelect}
            {...input}
            {...rest}
            searchOptions={searchOptions}
            typeAhead={false}
            inputName={input.name}
          >
            {renderChildren}
          </PlacesAutocomplete>
        </div>
        {hasError && <div className="form-control-feedback">{error}</div>}
      </div>
    );
  }
}

export default withStyles(styles)(PlaceField);
