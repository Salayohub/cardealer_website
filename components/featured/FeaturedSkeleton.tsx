

export function SectionSkeleton() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="max-w-[1400px] mx-auto w-full space-y-6 animate-pulse">
        <div className="h-4 w-40 bg-white/10 rounded-full"/>
        <div className="h-12 w-72 bg-white/10 rounded-xl"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden" style={{ minHeight:480 }}>
          <div className="bg-white/5"/>
          <div className="bg-white/[.03] p-10 space-y-6">
            <div className="h-4 w-32 bg-white/10 rounded"/>
            <div className="h-10 w-56 bg-white/10 rounded-lg"/>
            <div className="h-16 w-full bg-white/5 rounded-lg"/>
            <div className="flex gap-3">
              {[1,2,3].map(i => <div key={i} className="h-10 w-28 bg-white/10 rounded-lg"/>)}
            </div>
            <div className="h-12 w-48 bg-white/10 rounded-xl"/>
          </div>
        </div>
        <div className="flex gap-4">
          {[1,2,3,4,5].map(i => (
            <div key={i} className="rounded-xl bg-white/5 flex-shrink-0" style={{ width:180, height:110 }}/>
          ))}
        </div>
      </div>
    </section>
  );
}