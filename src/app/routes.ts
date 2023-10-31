enum RoutPath {
  HOME = "/",
  SEARCH = "/search",
  POST = "/post",
}
const HOME = {
  HOME: RoutPath.HOME,
};
const SEARCH = {
  HOME: RoutPath.SEARCH,
};
const POST = {
  HOME: RoutPath.POST,
};
const ROUTES = {
  HOME,
  SEARCH,
  POST,
};
export default ROUTES;
