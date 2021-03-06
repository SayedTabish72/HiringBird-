import AuthContainer from "components/Auth/Common/AuthContainer";
import Signin from "components/Auth/Signin";
import { useSelector } from "react-redux";

const withAuth = (Component) => {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // If user is not logged in, return login component
    if (!isAuthenticated) {
      return <AuthContainer svg="/auth/signin/vector2.svg" form={<Signin />} />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
