import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "@/route";

// Auth routes
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: lazyRouteComponent(() => import("./layouts/AuthLayout")),
});

const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/login",
  validateSearch: (search) => ({
    redirect: (search.redirect as string) || "/chat",
  }),
  component: lazyRouteComponent(()=>import('./LoginPage')),
});
const authRouteTree = authRoute.addChildren([loginRoute]);

export default authRouteTree;
