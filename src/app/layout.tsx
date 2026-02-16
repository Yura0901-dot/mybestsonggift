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
      <body
        className={`${bodoni.variable} ${lato.variable} antialiased`}
      >
        <Script
          id="admitad-tagtag"
          src="https://www.artfut.com/static/tagtag.min.js?campaign_code=c69fea552d"
          strategy="beforeInteractive"
          onError={(e) => {
             var self = e.target as HTMLScriptElement;
             (window as any).ADMITAD=(window as any).ADMITAD||{};(window as any).ADMITAD.Helpers=(window as any).ADMITAD.Helpers||{};(window as any).ADMITAD.Helpers.generateDomains=function(){for(var e=new Date,n=Math.floor(new Date(2020,e.getMonth(),e.getDate()).setUTCHours(0,0,0,0)/1e3),t=parseInt(String(1e12*(Math.sin(n)+1)),30),i=["de"],o=[],a=0;a<i.length;++a)o.push({domain:t+"."+i[a],name:t});return o};(window as any).ADMITAD.Helpers.findTodaysDomain=function(e: any){function n(){var o=new XMLHttpRequest,a=i[t].domain,D="https://"+a+"/";o.open("HEAD",D,!0),o.onload=function(){setTimeout(e,0,i[t])},o.onerror=function(){++t<i.length?setTimeout(n,0):setTimeout(e,0,void 0)},o.send()}var t=0,i=(window as any).ADMITAD.Helpers.generateDomains();n()};(window as any).ADMITAD=(window as any).ADMITAD||{};(window as any).ADMITAD.Helpers.findTodaysDomain(function(e: any){if((window as any).ADMITAD.dynamic=e,(window as any).ADMITAD.dynamic){var n=function(){return function(){return self.src?self:""}}(),t=n() as any,i=(/campaign_code=([^&]+)/.exec(t.src)||[])[1]||"";t?.parentNode?.removeChild(t);var o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.src="https://www."+(window as any).ADMITAD.dynamic.domain+"/static/"+(window as any).ADMITAD.dynamic.name.slice(1)+(window as any).ADMITAD.dynamic.name.slice(0,1)+".min.js?campaign_code="+i,o.appendChild(a)}});
          }}
        />
        
        <Script id="admitad-cookies" strategy="beforeInteractive">
          {`
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
                '(?:^|; )' + cookie_name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\/\\+^])/g, '\\$1') + '=([^;]*)'
              ));
              return matches ? decodeURIComponent(matches[1]) : undefined;
            };
            
            setSourceCookie = function () {
              var param = getSourceParamFromUri();
              var params = (new URL(document.location)).searchParams;
              if (!params.get(channel_name) && params.get('gclid')) { param = 'advAutoMarkup' }
              else if (!params.get(channel_name) && params.get('fbclid')) { param = 'facebook' }
              else if (!param) { return; }
              var period = days_to_store * 60 * 60 * 24 * 1000;
              var expiresDate = new Date((period) + +new Date);
              var cookieString = cookie_name + '=' + param + '; path=/; expires=' + expiresDate.toGMTString();
              document.cookie = cookieString;
              document.cookie = cookieString + '; domain=.' + location.host;
            };
            
            setSourceCookie();
          `}
        </Script>

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