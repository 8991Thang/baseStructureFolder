import { Customers } from "./pages/customers/customers";
import { CreateCustomers } from "./pages/customers/customers-create";
import { CustomersDetails } from "./pages/customers/customers-details";
import { ProjectStatus } from "./pages/project-status/project-status";
import { CreateProjectStatus } from "./pages/project-status/project-status-create";
import { ProjectStatusDetails } from "./pages/project-status/project-status-details";
import { ProjectType } from "./pages/project-type/project-type";
import { ProjectTypeCreate } from "./pages/project-type/project-type-create";
import { ProjectTypeDetails } from "./pages/project-type/project-type-details";
import { TechStack } from "./pages/tech-stack/teck-stack";
import { TeckStackDetails } from "./pages/tech-stack/teck-stack-details";

export const routes = [
  {
    path: "/project-type",
    exact: true,
    component: ProjectType,
  },
  {
    path: "/tech-stack",
    exact: true,
    component: TechStack,
  },
  {
    path: "/tech-stack/details/:id",
    exact: true,
    component: TeckStackDetails,
  },
  {
    path: "/project-type/create",
    exact: true,
    component: ProjectTypeCreate,
  },
  {
    path: "/project-status",
    exact: true,
    component: ProjectStatus,
  },
  {
    path: "/project-status/create",
    exact: true,
    component: CreateProjectStatus,
  },
  {
    path: "/project-status/details/:id",
    exact: true,
    component: ProjectStatusDetails,
  },
  {
    path: "/customers",
    exact: true,
    component: Customers,
  },
  {
    path: "/customers/create",
    exact: true,
    component: CreateCustomers,
  },
  {
    path: "/customers/details/:id",
    exact: true,
    component: CustomersDetails,
  },
  {
    path: "/project-type/details/:id",
    exact: true,
    component: ProjectTypeDetails,
  },
];
