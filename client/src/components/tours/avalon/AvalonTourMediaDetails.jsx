import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ErrorBoundryTours from '../ErrorBoundryTours'
import Loading from '../../Loading'
import Failed from '../Failed'
import AvalonSuccess from './AvalonSuccess'

const AvalonTourMediaDetails = () => {
  const { id, brand, year } = useParams()

  const [selectedTour, setSelectedTour] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFailed, setIsFailed] = useState(false)

  useEffect(() => {
    try {
      fetch(
        'https://globus.safetravelsggapi.com/api/v1/globus/get-tour-media',
        // 'http://localhost:8000/api/v1/globus/get-tour-media',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ tourNumber: id }),
        }
      )
        .then(res => res.json())
        .then(res => {
          setSelectedTour(res)
          setIsLoading(false)
        })

      window.scrollTo(0, 0)
    } catch (e) {
      setIsLoading(false)
      setIsFailed(true)
    }
  }, [])

  return (
    <ErrorBoundryTours fallback={isLoading === false && <Failed />}>
      <div className="py-3">
        <div>
          {isLoading === true ? <Loading /> : null}
          {isLoading === false && (
            <AvalonSuccess selectedTour={selectedTour} id={id} brand={brand} />
          )}
        </div>
      </div>
    </ErrorBoundryTours>
  )
}
export default AvalonTourMediaDetails
