
import React from "react";

const COOKIE_KEY = "cookieConsentAccepted";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full z-[110] flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex flex-col md:flex-row items-center gap-3 bg-cartoon-blue border-4 border-cartoon-yellow shadow-cartoon px-6 py-4 rounded-2xl max-w-xl mx-auto animate-fade-in">
        {/* Add a cute cookie image */}
        <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-white border-2 border-cartoon-yellow shadow-cartoon mr-2 h-14 w-14">
          <img
            src="https://img.icons8.com/emoji/96/000000/cookie-emoji.png"
            alt="cookie"
            className="h-10 w-10 object-contain"
            style={{ display: "block" }}
          />
        </div>
        {/* Text and actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-1">
          <span className="text-cartoon-cream font-cartoon text-lg flex items-center gap-2">
            We use cookies to improve your experience.
          </span>
          <a
            href="/privacy"
            tabIndex={0}
            className="underline text-cartoon-yellow hover:text-cartoon-orange text-base font-medium mx-2"
            style={{ outline: "none" }}
          >
            Learn more
          </a>
          <button
            onClick={handleAccept}
            className="bg-cartoon-yellow text-cartoon-blue font-cartoon font-bold px-6 py-2 rounded-xl shadow-cartoon hover:bg-cartoon-orange hover:text-cartoon-cream transition-colors ml-0 sm:ml-3 mt-2 sm:mt-0"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
