import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>StreamDash</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style global jsx>{`
      body {
        background: #3A3A3A;
      }
    `}</style>
    <style jsx>{`
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 75%;
        }
      `}</style>
    <img src='/static/logo.png' className='logo'/>
  </div>
);
