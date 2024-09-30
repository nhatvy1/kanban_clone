import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { List } from "src/module/list/list.entity";
import { Permission } from "src/module/permission/permission.entity";
import { Project } from "src/module/project/project.entity";
import { Role } from "src/module/role/role.entity";
import { User } from "src/module/user/user.entity";

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Project, List, Role, Permission],
  autoLoadEntities: true,
  synchronize: process.env.DB_SYNC === 'true',
});