import CategoriesPage from '../pages/CategoriesPage'
import CreateCategoryPage from '../pages/CreateCategoryPage'
import { CreateProductPage } from '../pages/CreateProductPage'
import DashboardPage from '../pages/DashboardPage'
import { EditProductPage } from '../pages/EditProductPage'
import OrdersPage from '../pages/OrdersPage'
import ProductsPage from '../pages/ProductsPage'
import UsersPage from '../pages/UsersPage'

export const routerController = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/create-product",
    element: <CreateProductPage />,
  },
  {
    path: "/edit-product/:id",
    element: <EditProductPage />,
  },
  {
    path: "/create-category",
    element: <CreateCategoryPage />,
  },
]
