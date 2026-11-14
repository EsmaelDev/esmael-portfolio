import { useEffect, useState } from "react";

/* Listens for 'eg:toast' custom events and shows short confirmations. */
export default function ToastStack() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    let timer;
    const onToast = (e) => {
      const message = e.detail?.message;
      if (!message) return;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev.slice(-1), { id, message }]);
      clearTimeout(timer);
      timer = setTimeout(() => setToasts([]), 2400);
    };
    window.addEventListener("eg:toast", onToast);
    return () => {
      window.removeEventListener("eg:toast", onToast);
      clearTimeout(timer);
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="toast-stack" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <span className="dot" />
          {t.message}
        </div>
      ))}
    </div>
  );
}
