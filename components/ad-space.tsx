export default function AdSpace({ position }: { position: 'top' | 'bottom' | 'sidebar' }) {
  const adStyles = {
    top: 'h-32',
    bottom: 'h-32',
    sidebar: 'h-96'
  }

  return (
    <div className={`flex items-center justify-center rounded-lg border-2 border-dashed border-accent/50 bg-accent/5 ${adStyles[position] || 'h-32'} p-4`}>
      <div className="text-center">
        <p className="text-sm font-semibold text-muted-foreground">Advertisement Space</p>
        <p className="text-xs text-muted-foreground mt-1">
          {position === 'sidebar' ? '300x600' : '728x90'} px
        </p>
        <p className="text-xs text-accent mt-2">
          Configure your ad network here
        </p>
      </div>
    </div>
  )
}
