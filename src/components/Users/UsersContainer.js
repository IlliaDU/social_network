import { connect } from "react-redux";
import { follow, setCurrentPage,  unfollow, getUsers} from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { toggleFollowingProgress } from './../../redux/users-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { combineReducers, compose } from "redux";


class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <> 
        {this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount = {this.props.totalUsersCount} 
                    pageSize = {this.props.pageSize} 
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged } 
                    users = {this.props.users} 
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    followingInProgress = {this.props.followingInProgress}  />
                    </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer) 





/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
} */

