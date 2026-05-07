import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptVars – Manage Reusable AI Prompt Variables",
  description: "Create and manage template variables for your AI prompts. Inject company info, writing style, and context consistently across every AI chat."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cc010c8c-cd24-4305-b05f-d6522f356de9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
