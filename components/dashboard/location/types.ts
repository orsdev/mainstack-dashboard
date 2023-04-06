export interface ILocations {
  country: string
  count: number
  percent: number
}

export type LocationsProps = {
  locations: ILocations[] | undefined
}