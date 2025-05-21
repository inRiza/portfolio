import Search from './search'
import InfoRight from './info-right'
import Education from './edu'
const RightBar = () => {
  return (
    <div className='pt-4 flex flex-col gap-4 mb-10'>
      <Search/>
      <InfoRight/>
      <Education/>
    </div>
  )
}

export default RightBar