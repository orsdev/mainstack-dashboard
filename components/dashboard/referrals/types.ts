export interface IReferrals {
  source: string
  count: number
  percent: number
}

export type ReferralsProps = {
  referrals: IReferrals[] | undefined
}