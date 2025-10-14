import { createRoute, lazyRouteComponent } from "@tanstack/react-router";

import authenticatedRoute from "../_authenticated/route";
const chatRoute = createRoute({
  getParentRoute: () => authenticatedRoute,
  path: "/chat",
  component: lazyRouteComponent(() => import("./layouts/ChatLayout")),
});

const chatIndexRoute = createRoute({
  getParentRoute: () => chatRoute,
  path: "/",
  component: lazyRouteComponent(() => import("./ChatPage")),
});

const conversationRoute = createRoute({
  getParentRoute: () => chatRoute,
  path: "/$conversationId",
  component: lazyRouteComponent(() => import("./ConversationPage")),
});

const chatRouteTree = chatRoute.addChildren([
  chatIndexRoute,
  conversationRoute,
]);

export default chatRouteTree;
