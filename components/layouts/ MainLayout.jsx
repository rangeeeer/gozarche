import MainNav from '../navs/MainNav'
export default function MainLayout(props) {
  return (
    <>
      <MainNav />
      {props.children}
    </>
  )
}
