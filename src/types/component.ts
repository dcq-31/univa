/**
 * Components Interfaces
 */

export type TLinkBase = string | { name: string }

export interface IIcon {
  name: string
  svg: string
}

export interface ICourseVideo {
  date: string
  author: string
  title: string
  description: string
}
