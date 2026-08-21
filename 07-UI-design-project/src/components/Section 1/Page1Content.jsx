import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="py-3 px-8 h-[90vh] flex justify-between gap-10">
        <LeftContent />
        <RightContent users={props.users} />

    </div>
  )
}

export default Page1Content