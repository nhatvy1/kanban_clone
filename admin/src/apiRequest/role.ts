import http from "@/lib/http";
import { IResponseRoles } from "@/types/role";

const role = {
  getRoles: ()=> http.get<IResponseRoles>('role')
}

export default role