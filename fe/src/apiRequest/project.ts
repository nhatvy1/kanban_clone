import { http } from '@/configs/http'
import {
  IFormCreateProject,
  IFormUpdateProject,
  IResponseCreateProject,
  IResponseDeleteProject,
  IResponseListProject,
  IResponseUpdateProject
} from '@/types/project.type'

export const fetchProjectsByUser = () =>
  http.get<null, IResponseListProject>('project/by-user')

export const createProject = (data: IFormCreateProject) =>
  http.post<IFormCreateProject, IResponseCreateProject>('create', data)

export const updateProject = (id: number, data: IFormUpdateProject) =>
  http.put<IFormUpdateProject, IResponseUpdateProject>(`project/${id}`, data)

export const deleteProject = (id: number) =>
  http.delete<null, IResponseDeleteProject>(`project/${id}`)
