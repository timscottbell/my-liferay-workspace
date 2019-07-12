import axios from "axios";
import React from "react";

export default class extends React.Component {
  render() {
    axios
      .get("http://localhost:8080/o/headless-admin-user/v1.0/roles", {
        auth: {
          username: "test@liferay.com",
          password: "a"
        }
      })
      .then(({ data }) => console.log(data));

    return (
      <div>
        <div>
          <span className="tag">Portlet Namespace:</span>
          <span className="value">{this.props.portletNamespace}</span>
        </div>
        <div>
          <span className="tag">Context Path:</span>
          <span className="value">{this.props.contextPath}</span>
        </div>
        <div>
          <span className="tag">Portlet Element Id:</span>
          <span className="value">{this.props.portletElementId}</span>
        </div>

        <div>
          <span className="tag">Configuration:</span>
          <span className="value pre">
            {JSON.stringify(this.props.configuration, null, 2)}
          </span>
        </div>
      </div>
    );
  }
}
