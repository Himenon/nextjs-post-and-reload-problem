import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next/types";

export type Props = {
  requestMethod: string;
};

const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>Request Method: {props.requestMethod}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }: GetServerSidePropsContext) => {
  return {
    props: {
      requestMethod: req.method,
    },
  };
};

export default Page;
