import Link from "next/link";
import { withRouter } from "next/router";
import React from "react";

export default withRouter(
  class Index extends React.Component {
    render() {
      return (
        <div>
          Index of ID {this.props.router.query.id}
          <Link scroll={false} href={`/?id=1`}>
            <a>Load New Local Route 1</a>
          </Link>
          <Link scroll={false} href={`/?id=2`}>
            <a>Load New Local Route 2</a>
          </Link>
        </div>
      );
    }
  }
);
