import React, { useState } from "react";
import { X, Download, Smartphone, QrCode, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#090d16] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(16,185,129,0.25)] text-white space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant App Access</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">Get CalRay AI Free</h3>
          <p className="text-xs sm:text-sm text-slate-300">
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
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs py-3.5 px-4 rounded-2xl transition-all shadow-lg text-center"
          >
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Download for iOS (App Store)</span>
          </a>

          <a
            href="#download-android"
            onClick={(e) => {
              e.preventDefault();
              alert("CalRay Android APK download started!");
            }}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs py-3.5 px-4 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all text-center"
          >
            <Download className="w-4 h-4" />
            <span>Download Android APK</span>
          </a>
        </div>

        {/* QR Code Scan Block */}
        <div className="bg-slate-900/90 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
          <div className="w-16 h-16 bg-white p-1.5 rounded-xl shrink-0 flex items-center justify-center">
            <QrCode className="w-full h-full text-slate-950" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block">Scan QR Code with Phone Camera</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Instantly opens CalRay AI WebApp & App Store download page.
            </span>
          </div>
        </div>

        {/* Send Direct Link Form */}
        <form onSubmit={handleSendLink} className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 block">
            Or get instant download SMS / Email link:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Enter email or phone number..."
              className="flex-1 bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 shrink-0"
            >
              <span>Send Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          {sentStatus && (
            <p className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> {sentStatus}
            </p>
          )}
        </form>

        {/* Footer Notes */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            No Credit Card Required
          </span>
          <span>Version 2.4 (Latest)</span>
        </div>
      </div>
    </div>
  );
}
