import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import { userProfile } from '../../redux/content-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ContentContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.userProfile(userId)
  }
  
  render() {
    

    return (
      <Content {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.contentPage.profile
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { userProfile }),
  withRouter,
  withAuthRedirect
)(ContentContainer)