import CategoriesPage from "../pages/categories/CategoriesPage";
import CreateCategoryPage from "../pages/categories/CreateCategoryPage";
import EditCategoryPage from "../pages/categories/EditCategoryPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import EditOrderPage from "../pages/orders/EditOrderPage";
import OrdersPage from "../pages/orders/OrdersPage";
import CreateProductPage from "../pages/products/CreateProductPage";
import EditProductPage from "../pages/products/EditProductPage";
import ProductsPage from "../pages/products/ProductsPage";
import EditUserPage from "../pages/users/EditUserPage";
import UsersPage from "../pages/users/UsersPage";


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
