import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getUsersPending } from '../../store/actions/user.actions';
import { IStore } from '../../store/reducers';
import { Content } from './content';

// tslint:disable-next-line
const mapStateToProps = (state: IStore) => ({
    searchTerm: state.searchTerm,
    users: state.users,
});

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUsersPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
