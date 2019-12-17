import { connect } from 'react-redux';
import HomePageComponent from './HomePage';
import { likeDoggo, deleteDoggo } from '../../actions/doggos';

const mapStateToProps = (state) => {
  const { doggos: { likedDoggos} } = state;

  return {
    likedDoggos // this would be in HomePageComponent's props
  };
};

const mapDispatchToProps = ({
  likeDoggo, deleteDoggo // this would be in HomePageComponent's props
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);

