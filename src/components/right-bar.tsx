import Search from './search'
import InfoRight from './info-right'

const RightBar = () => {
  return (
    <div className='pt-4 flex flex-col gap-4'>
      <Search/>
      <InfoRight/>
    </div>
  )
}

export default RightBar