import { Link } from "react-router-dom";
import { layoutListItem } from "../utils/contentConfig";
import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex flex-col bg-slate-800 flex-1 h-full">
        <h3 className="text-white mt-10 mb-4 text-center text-xl font-bold">FURNIRO ADMIN</h3>
        <hr className="mx-14" />
        <ul className="mt-10 ml-14 flex flex-col gap-10">
          {layoutListItem.map((item) => (
            <Link to={item.path} key={item.id}>
              <li className="py-2 px-2 text-slate-100 font-semibold bg-slate-800">{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-[4] h-full bg-slate-200">
        {children}
      </div>
    </div>
  )
}

export default Layout;
