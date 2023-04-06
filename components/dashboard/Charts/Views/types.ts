export type ViewsProps = {
  time_frame: string,
  views: {
    graph_data: {
      views: Record<string, number>
    }
  } | undefined
}