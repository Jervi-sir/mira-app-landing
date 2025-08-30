import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarClock, Lock, Smartphone } from "lucide-react";
import Image from "next/image";

type JoinTodayProps = {
  iosHref?: string;                 // e.g. App Store URL
  androidHref?: string;             // e.g. Play Store URL
  iosBadgeSrc?: string;             // default: /ios_download.svg
  androidBadgeSrc?: string;         // default: /android_download.svg
  onJoinClick?: () => void;         // optional handler
  showWaitlistButton?: boolean;     // default: true
  launchDateLabel?: string;         // default: "Launches 20 September 2025"
};

export const JoinTodaySection: React.FC<JoinTodayProps> = ({
  iosHref,
  androidHref,
  iosBadgeSrc = "/ios_download.svg",
  androidBadgeSrc = "/android_download.svg",
  onJoinClick,
  showWaitlistButton = true,
  launchDateLabel = "Launches 20 September 2025",
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-200/80 to-teal-100/70 dark:from-teal-900/40 dark:to-teal-800/40">
      <div className="absolute -top-24 -left-24 size-[360px] rounded-full bg-white/40 blur-3xl dark:bg-white/10" />
      <div className="absolute -bottom-28 -right-28 size-[320px] rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 md:py-24 text-center">
        <h3 className="text-3xl md:text-4xl font-bold">Join the Mira community</h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Be the first to try Mira and help shape the experience for pet lovers across Algeria.
          We’ll only email you about launch and major updates.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CalendarClock className="size-4" />
          <span>{launchDateLabel}</span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {showWaitlistButton && (
            <Button size="lg" className="gap-2" asChild onClick={onJoinClick}>
              <Link href="#waitlist">
                <Smartphone className="size-5" />
                Join waitlist
              </Link>
            </Button>
          )}

          <StoreBadge
            href={iosHref}
            imgSrc={iosBadgeSrc}
            alt="Download on the App Store"
            comingSoon={!iosHref}
          />
          <StoreBadge
            href={androidHref}
            imgSrc={androidBadgeSrc}
            alt="Get it on Google Play"
            comingSoon={!androidHref}
          />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="size-4" />
          <span>Privacy-friendly: we never share your email.</span>
        </div>
      </div>
    </section>
  );
};

function StoreBadge({
  href,
  imgSrc,
  alt,
  comingSoon,
}: {
  href?: string;
  imgSrc: string;
  alt: string;
  comingSoon?: boolean;
}) {
  const badge = (
    <span
      className={[
        "inline-flex items-center rounded-xl border bg-background px-3 py-2 shadow-sm",
        comingSoon ? "cursor-not-allowed opacity-60" : "",
      ].join(" ")}
    >
      <img src={imgSrc} alt={alt} className="h-12" />
    </span>
  );

  return (
    <div className="relative">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
          {badge}
        </a>
      ) : (
        badge
      )}
      {comingSoon && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-muted-foreground">
          Coming soon
        </span>
      )}
    </div>
  );
}
