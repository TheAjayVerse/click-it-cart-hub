
import React from "react";

const COOKIE_KEY = "cookieConsentAccepted";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Check if user already accepted
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
      <div className="pointer-events-auto flex flex-col md:flex-row items-center gap-3 bg-cartoon-blue/95 border-4 border-cartoon-yellow shadow-cartoon px-6 py-4 rounded-2xl max-w-xl mx-auto">
        <span className="text-cartoon-cream font-cartoon text-lg flex items-center gap-2">
          🍪 We use cookies to improve your experience.
        </span>
        <a
          href="/privacy"
          tabIndex={0}
          className="underline text-cartoon-yellow hover:text-cartoon-orange text-base font-medium ml-1 md:ml-4"
          style={{ outline: "none" }}
        >
          Learn more
        </a>
        <button
          onClick={handleAccept}
          className="mt-2 md:mt-0 ml-0 md:ml-4 bg-cartoon-yellow text-cartoon-blue font-cartoon font-bold px-6 py-2 rounded-xl shadow-cartoon hover:bg-cartoon-orange transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
