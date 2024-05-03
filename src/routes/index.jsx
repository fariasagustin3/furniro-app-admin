import CategoriesPage from '../pages/CategoriesPage'
import CreateCategoryPage from '../pages/CreateCategoryPage'
import { CreateProductPage } from '../pages/CreateProductPage'
import DashboardPage from '../pages/DashboardPage'
import EditCategoryPage from '../pages/EditCategoryPage'
import EditOrderPage from '../pages/EditOrderPage'
import { EditProductPage } from '../pages/EditProductPage'
import EditUserPage from '../pages/EditUserPage'
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
  {
    path: "/edit-category/:id",
    element: <EditCategoryPage />,
  },
  {
    path: "/edit-order/:id",
    element: <EditOrderPage />,
  },
  {
    path: "/edit-user/:id",
    element: <EditUserPage />,
  },
]
