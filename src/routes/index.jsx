import LoginPage from "../pages/auth/LoginPage";
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

const token = localStorage.getItem("token")

export const routerController = [
  {
    path: "/login",
    element: !token ? <LoginPage /> : <DashboardPage />
  },
  {
    path: "/",
    element: !token ? <LoginPage /> : <DashboardPage />,
  },
  {
    path: "/products",
    element: !token ? <LoginPage /> : <ProductsPage />,
  },
  {
    path: "/categories",
    element: !token ? <LoginPage /> : <CategoriesPage />,
  },
  {
    path: "/orders",
    element: !token ? <LoginPage /> : <OrdersPage />,
  },
  {
    path: "/users",
    element: !token ? <LoginPage /> : <UsersPage />,
  },
  {
    path: "/create-product",
    element:!token ? <LoginPage /> :  <CreateProductPage />,
  },
  {
    path: "/edit-product/:id",
    element: !token ? <LoginPage /> : <EditProductPage />,
  },
  {
    path: "/create-category",
    element: !token ? <LoginPage /> : <CreateCategoryPage />,
  },
  {
    path: "/edit-category/:id",
    element: !token ? <LoginPage /> : <EditCategoryPage />,
  },
  {
    path: "/edit-order/:id",
    element: !token ? <LoginPage /> : <EditOrderPage />,
  },
  {
    path: "/edit-user/:id",
    element: !token ? <LoginPage /> : <EditUserPage />,
  },
]
