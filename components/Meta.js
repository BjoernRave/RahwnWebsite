import Head from "next/head";
import React from "react";

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Rahwn Websites - I create custom websites for you</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v1.0.0/css/unicons.css"
      />
      <meta
        name="description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer, capable of advanced tasks"
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="icon" href="/static/favicon.ico" />
      <meta name="twitter:url" content="https://bjoern-rave.tech" />
      <meta
        name="twitter:title"
        content="Rahwn Websites - I create custom websites for you"
      />
      <meta
        name="twitter:description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer, capable of advanced tasks"
      />
      <meta name="twitter:image" content="/static/Raven1.png" />
      <meta name="twitter:creator" content="@RaveBjorn" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Rahwn Websites - I create custom websites for you"
      />
      <meta
        property="og:description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer, capable of advanced tasks"
      />
      <meta property="og:site_name" content="Rahwn Websites" />
      <meta property="og:url" content="https://bjoern-rave.tech" />
      <meta property="og:image" content="/static/Raven1.png" />
    </Head>
  );
}
