import React, { useState } from "react";
import { X, Download, Smartphone, QrCode, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function DownloadModal({ isOpen, onClose }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [sentStatus, setSentStatus] = useState("");

  if (!isOpen) return null;

  const handleSendLink = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSentStatus("Success! VIP Invite download link sent to your device.");
    setEmailOrPhone("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-emerald-800 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant App Access</span>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Get CalRay AI Free</h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Available on iOS App Store & Android. Start tracking calories and generating workouts in seconds.
          </p>
        </div>

        {/* Download Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="#download-ios"
            onClick={(e) => {
              e.preventDefault();
              alert("CalRay for iOS download link dispatched! Redirecting to App Store...");
            }}
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-bold text-xs py-3.5 px-4 rounded-2xl transition-all shadow-xs text-center"
          >
            <Smartphone className="w-4 h-4 text-emerald-700" />
            <span>Download iOS (App Store)</span>
          </a>

          <a
            href="#download-android"
            onClick={(e) => {
              e.preventDefault();
              alert("CalRay Android APK download started!");
            }}
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-2xl shadow-md transition-all text-center"
          >
            <Download className="w-4 h-4" />
            <span>Download Android APK</span>
          </a>
        </div>

        {/* QR Code Scan Block */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-16 h-16 bg-white p-1.5 rounded-xl border border-slate-200 shrink-0 flex items-center justify-center">
            <QrCode className="w-full h-full text-slate-900" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900 block">Scan QR Code with Phone Camera</span>
            <span className="text-[11px] text-slate-600 block mt-0.5">
              Instantly opens CalRay WebApp & App Store download page.
            </span>
          </div>
        </div>

        {/* Send Direct Link Form */}
        <form onSubmit={handleSendLink} className="space-y-2">
          <label className="text-xs font-semibold text-slate-700 block">
            Or get instant download SMS / Email link:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter email or phone number..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 shrink-0"
            >
              <span>Send Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          {sentStatus && (
            <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {sentStatus}
            </p>
          )}
        </form>

        {/* Footer Notes */}
        <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            No Credit Card Required
          </span>
          <span>Version 2.4 (Latest)</span>
        </div>
      </div>
    </div>
  );
}
