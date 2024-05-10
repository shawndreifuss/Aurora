const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full  overflow-auto ">
     <div className=" h-full w-full absolute z-[-1] bg-[url('/a-bg.jpeg')]  bg-cover opacity-120 bg-center bg-no-repeat "/>

      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  )
}

export default LandingLayout
