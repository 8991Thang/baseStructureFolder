import { Customers } from "./pages/customers/customers";
import { CustomersDetails } from "./pages/customers/customers-details";
import { ProjectStatus } from "./pages/project-status/project-status";
import { ProjectType } from "./pages/project-type/project-type";
import { CreateProjectType } from "./pages/project-type/project-type-create";
import { TechStack } from "./pages/tech-stack/teck-stack";

export const routes = [
  {
    path: "/project-type",
    exact: true,
    component: ProjectType,
    routes: [
      {
        path: "/project-type/create",
        component: CreateProjectType,
      },
    ],
  },
  {
    path: "/tech-stack",
    exact: true,
    component: TechStack,
  },
  {
    path: "/project-type/create",
    exact: true,
    component: CreateProjectType,
  },
  {
    path: "/project-status",
    exact: true,
    component: ProjectStatus,
  },
  {
    path: "/customers",
    exact: true,
    component: Customers,
  },

  {
    path: "/customers/:id",
    exact: true,
    component: CustomersDetails,
  },
];
