import PropTypes from "prop-types";
import { Layout } from "../../../common/layouts";

const Component = ({ component: Components }) => (
  <Layout>
    <Components />
  </Layout>
);

Component.propTypes = {
  component: PropTypes.elementType,
};

export default Component;
