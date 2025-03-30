import { shopifyProjects } from "./Shopify";
import { wordpressProjects } from "./Wordpress";
import { mernProjects } from "./MERN";
import { nextJsProjects } from "./NextJs";
import { mobileAppProjects } from "./Mobile";

import { categories } from "./Categories";

export const projects = [
  ...shopifyProjects,
  ...wordpressProjects,
  ...mernProjects,
  ...nextJsProjects,
  ...mobileAppProjects
];

export { categories };
