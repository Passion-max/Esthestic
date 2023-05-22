import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";
import $ from 'jquery';

export default function Document() {
  useEffect(() => {
    const script = document.createElement('script');
    const script1 = document.createElement('script');
    script.src = "/assets/js/jquery.min.js";
    script1.src = "/assets/js/main.js";
    script.async = true;
    script1.async = true;
    document.body.appendChild(script1);
    document.body.appendChild(script);
   
  }, []);
  return (
    <Html lang="en">
      <Head />
      <body class="body header-fixed is_dark">
        <Main />
        <NextScript />
        
          {/* <script src="/assets/js/jquery.easing.js"></script> */}
          <script src="/assets/js/bootstrap.min.js"></script>
          {/* <script src="/assets/js/swiper-bundle.min.js"></script> */}
          {/* <script src="/assets/js/swiper.js"></script> */}
          <script src="/assets/js/wow.min.js"></script>
          <script src="/assets/js/plugin.js"></script>
          <script src="/assets/js/count-down.js"></script>
          <script src="/assets/js/shortcodes.js"></script>
          {/* <script src="/assets/js/main.js"></script> */}
      </body>
    </Html>
  );
}
