export const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-4 border-solid border-blue-600 border-t-transparent animate-spin"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl animate-pulse">T</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 flex flex-col items-center">
        <p className="text-slate-500 font-medium tracking-widest uppercase text-xs animate-pulse">
          TailAdmin is Loading...
        </p>
      </div>
    </div>
  );
};