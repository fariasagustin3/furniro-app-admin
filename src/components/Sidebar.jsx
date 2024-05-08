import { Link } from "react-router-dom"
import { layoutListItem } from "../utils/contentConfig"

export const Sidebar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload()
  }

  return (
    <div className="fixed top-0 left-0 w-60 h-full bg-slate-800">
      <h3 className="font-bold text-xl text-white py-5 text-center">FURNIRO ADMIN</h3>
      <hr className="mx-5" />
      <ul className="mx-10 mt-5 flex flex-col gap-7">
        {layoutListItem.map((item) => (
          <Link to={item.path} key={item.id}>
            <li className="text-slate-100">{item.title}</li>
          </Link>
        ))}
        <li className="-ml-1">
          <button onClick={logout} className="flex items-center gap-2 text-red-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
