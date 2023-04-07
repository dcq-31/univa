/**
 * Components Interfaces
 */

export type TBaseLink = string | { name: string }

export interface IIcon {
  name: string
  svg: string
}

export interface ICourseVideo {
  id: number
  title: string
  description: string
  author: string
  date: string
}
