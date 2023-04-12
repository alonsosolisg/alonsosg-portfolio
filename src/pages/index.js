import {
  Navbar,
  Introduction,
  Skillset,
  Projects,
  Certificates,
  Contact,
  Footer,
} from "@/components";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";

const CLARITY_ID = process.env.CLARITY_ID;
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export default function Home() {
  const [cookieConsent, setCookieConsent] = useState(false);

  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  useEffect(() => {
    const consent = getCookie("alonsosgconsent");
    setCookieConsent(consent === "true");
  }, []);

  return (
    <div>
      <Head>
        {cookieConsent === true && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script", "${CLARITY_ID}");
          `,
            }}
          />
        )}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <title>Alonso Solis Gerloni</title>
      </Head>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="alonsosgconsent"
        expires={365}
        onAccept={() => setCookieConsent(true)}
      >
        This website uses cookies to enhance the user experience. By using this
        website, you consent to the use of cookies.
      </CookieConsent>
      <Navbar />
      <Introduction />
      <Skillset />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
