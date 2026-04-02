export default function SettingsPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20">
      <div className="space-y-4">
        <h2 className="font-serif text-3xl font-light italic">Privacy & <span className="not-italic">Security</span></h2>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Manage your account security and data preferences.
        </p>
      </div>

      <div className="bg-secondary/10 p-20 text-center border border-border/40">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Advanced security features are coming soon.
        </p>
      </div>
    </div>
  )
}
