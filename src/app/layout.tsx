import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from 'next/font/google'
import "./globals.css";
import Script from "next/script";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato'
})

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni'
})

export const metadata: Metadata = {
  title: "SongToGift",
  description: "Custom songs for your loved ones",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        {/* Admitad tagtag script — вставляємо напряму через тег щоб onerror спрацював */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var s = document.createElement('script');
                s.src = 'https://www.artfut.com/static/tagtag.min.js?campaign_code=c69fea552d';
                s.async = true;
                s.onerror = function() {
                  window.ADMITAD = window.ADMITAD || {};
                  window.ADMITAD.Helpers = window.ADMITAD.Helpers || {};
                  window.ADMITAD.Helpers.generateDomains = function() {
                    for (var e = new Date, n = Math.floor(new Date(2020, e.getMonth(), e.getDate()).setUTCHours(0,0,0,0)/1e3), t = parseInt(1e12*(Math.sin(n)+1)).toString(30), i = ["de"], o = [], a = 0; a < i.length; ++a) o.push({domain: t+"."+i[a], name: t});
                    return o;
                  };
                  window.ADMITAD.Helpers.findTodaysDomain = function(e) {
                    function n() {
                      var o = new XMLHttpRequest, a = i[t].domain, D = "https://"+a+"/";
                      o.open("HEAD", D, true);
                      o.onload = function() { setTimeout(e, 0, i[t]); };
                      o.onerror = function() { ++t < i.length ? setTimeout(n, 0) : setTimeout(e, 0, void 0); };
                      o.send();
                    }
                    var t = 0, i = window.ADMITAD.Helpers.generateDomains(); n();
                  };
                  window.ADMITAD.Helpers.findTodaysDomain(function(e) {
                    if (window.ADMITAD.dynamic = e, window.ADMITAD.dynamic) {
                      var script = document.createElement('script');
                      script.src = "https://www." + window.ADMITAD.dynamic.domain + "/static/" + window.ADMITAD.dynamic.name.slice(1) + window.ADMITAD.dynamic.name.slice(0,1) + ".min.js?campaign_code=c69fea552d";
                      document.getElementsByTagName("head")[0].appendChild(script);
                    }
                  });
                };
                document.getElementsByTagName('head')[0].appendChild(s);
              })();
            `
          }}
        />
        {/* Admitad deduplication cookie */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var cookie_name = 'deduplication_cookie';
              var days_to_store = 90;
              var deduplication_cookie_value = 'admitad';
              var channel_name = 'utm_source';

              getSourceParamFromUri = function () {
                var pattern = channel_name + '=([^&]+)';
                var re = new RegExp(pattern);
                return (re.exec(document.location.search) || [])[1] || '';
              };

              getSourceCookie = function () {
                var matches = document.cookie.match(new RegExp(
                  '(?:^|; )' + cookie_name.replace(/([\.$?*|{}\(\)\[\]\\/\+^])/g, '\\$1') + '=([^;]*)'
                ));
                return matches ? decodeURIComponent(matches[1]) : undefined;
              };

              setSourceCookie = function () {
                var param = getSourceParamFromUri();
                var params = (new URL(document.location)).searchParams;
                if (!params.get(channel_name) && params.get('gclid')) { param = 'advAutoMarkup'; }
                else if (!params.get(channel_name) && params.get('fbclid')) { param = 'facebook'; }
                else if (!param) { return; }
                var period = days_to_store * 60 * 60 * 24 * 1000;
                var expiresDate = new Date((period) + +new Date);
                var cookieString = cookie_name + '=' + param + '; path=/; expires=' + expiresDate.toGMTString();
                document.cookie = cookieString;
                document.cookie = cookieString + '; domain=.' + location.host;
              };

              setSourceCookie();
            `
          }}
        />
      </head>
      <body className={`${bodoni.variable} ${lato.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZGFJRKYFX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZGFJRKYFX');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}