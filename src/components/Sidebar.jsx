import { Link } from "react-router-dom"
import { layoutListItem } from "../utils/contentConfig"

export const Sidebar = () => {
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
      </ul>
    </div>
  )
}
