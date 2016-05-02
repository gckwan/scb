import React from 'react-native';

export default React.PropTypes.shape({
  pop: React.PropTypes.func.isRequired,
  popN: React.PropTypes.func.isRequired,
  popToRoute: React.PropTypes.func.isRequired,
  popToTop: React.PropTypes.func.isRequired,
  push: React.PropTypes.func.isRequired,
  replace: React.PropTypes.func.isRequired,
  replacePrevious: React.PropTypes.func.isRequired,
  replacePreviousAndPop: React.PropTypes.func.isRequired,
  resetTo: React.PropTypes.func.isRequired,
});
