import { Dispatch } from 'redux';
import { searchByTerm } from '../../store/actions/search-term.actions';
import { connect } from 'react-redux';
import { Header } from './header';

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch) => ({
    search: (term: string) => dispatch(searchByTerm(term))
});

export default connect(null, mapDispatchToProps)(Header);
