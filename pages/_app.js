import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { makeStore } from "../store";
import actions from "../store/actions";
import { detect } from "detect-browser";
const browser = detect();

export default withRedux(makeStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
      console.log(router);
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};
      let isMobile = ctx.req
        ? ctx.req.headers["user-agent"]
            .toString()
            .toLowerCase()
            .includes("mobile")
        : false;
      return { pageProps, isMobile, router };
    }

    componentWillMount() {}

    componentDidMount() {}

    render() {
      const { Component, pageProps, store, isMobile, router } = this.props;

      let supportedBrowser = true;

      let agent =
        browser.name != "node" ? navigator.userAgent.toLowerCase() : "node";
      if (
        agent.includes(["opr", "chrome", "firefox", "safari"]) == -1 ||
        agent.includes("edge") ||
        (agent.includes("node") && typeof navigator === undefined)
      ) {
        supportedBrowser = false;
      }

      return (
        <Provider store={store}>
          <Container>
            <Component
              {...pageProps}
              isMobile={isMobile}
              router={router}
              supportedBrowser={supportedBrowser}
            />
          </Container>
        </Provider>
      );
    }
  }
);
