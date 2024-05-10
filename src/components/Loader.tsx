import Image from 'next/image'

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-24 h-24 relative animate-spin">
        <Image alt="Logo" fill src="/eye.png" />
      </div>

      <p className="text-sm text-muted-foreground">Aurora is thinking...</p>
    </div>
  )
}

export default Loader
