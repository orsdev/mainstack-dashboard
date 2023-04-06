export const getTotalViews = (views: number[]) => {
  return views.reduce((accumulator, view) => accumulator + view, 0)
}