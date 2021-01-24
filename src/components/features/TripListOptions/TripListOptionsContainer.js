import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationFrom, changeDurationTo, AddSearchTag, removeSearchTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDurationFrom: value => dispatch(changeDurationFrom(value)),
  changeDurationTo: value => dispatch(changeDurationTo(value)),
  addSearchTag: tag => dispatch(AddSearchTag(tag)),
  removeSearchTag: tag => dispatch(removeSearchTag(tag)),

  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
