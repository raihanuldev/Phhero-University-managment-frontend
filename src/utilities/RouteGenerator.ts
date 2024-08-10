// Routes Type
type TRoute = {
//   name?: string; 
  path: string;
  element: JSX.Element;
};

export type TUserPath = {
  name: string;
  path: string;
  element: JSX.Element;
  children?: TRoute[];
};

export const RouteGenrator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, [] as TRoute[]);
  return routes;
};
