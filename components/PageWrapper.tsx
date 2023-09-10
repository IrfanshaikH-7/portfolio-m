import { NextPageContext } from "next";
import { FunctionComponent } from "react"

export default function PageWrapper
({
    children,
  }: {
    children: FunctionComponent<{}> & { getInitialProps?(context: NextPageContext): {} | Promise<{}>; }
  }) {

    return (
        {children}
    )
  }