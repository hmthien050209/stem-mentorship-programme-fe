// The post's information to display to the user (not the posts themselves)
export interface PostInfo {
  title: string
  slug: {
    current: string
  }
  image: {
    asset: {
      url: string
    }
  }
}
