import { Sidebar } from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex items-start">
      <Sidebar />
      <div className="flex flex-[4] h-full overflow-x-hidden bg-slate-200 ml-60">
        {children}
      </div>
    </div>
  )
}

export default Layout;
