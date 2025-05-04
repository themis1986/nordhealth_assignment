export default defineNuxtRouteMiddleware((to, from) => {
  if (from.path === "/" && to.path === "/") {
    return navigateTo("sign-up");
  }
});
