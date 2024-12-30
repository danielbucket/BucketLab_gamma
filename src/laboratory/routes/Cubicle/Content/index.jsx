import { Link } from 'react-router-dom'
import { StyledContent } from './index.styled'

export default function Content() {

  return (
    <StyledContent className='cubicle-content'>
      <div className='header'>
        <h2>You've made it this far!</h2>
        <p>Coming soon to a Cubicle near you...</p>
        <p>In the works is a communication utility that will bridge the gap between you the Cubicle Dweller and me, Bucket.</p>
        <p>Stay tuned for updates!</p>
        <p>I need to clear out the cobwebs currently inhabinting the space in my brain where my knowledge of KnexJS and PosgreSQL should still be burried...</p>
      </div>
      <div className='footer'>
        <p>Remember, I can still be contacted via <Link to='https://www.linkedin.com/in/daniel-ludwick/'>LinkedIn</Link></p>
        <p>*No data has been or is being collected at this time.</p>
      </div>
    </StyledContent>
  )
}