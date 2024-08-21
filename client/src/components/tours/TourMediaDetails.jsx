import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import Modal from './Modal'
import Success from './Success'
import Failed from './Failed'

const TourMediaDetails = () => {
  const { id } = useParams()
  const [selectedTour, setSelectedTour] = useState(null)
  const [open, setOpen] = useState(false)
  const [noData, setNoData] = useState(true)
  const [failedState, setFailedState] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/globus/get-tour-media', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ tourNumber: id }),
    })
      .then(res => res.json())
      .then(res => {
        setSelectedTour(res), setNoData(false)
      })
      .catch(e => {
        console.log(e)
        setFailedState(true)
      })
  }, [])

  return (
    <div className="py-3">
      <div>
        {noData === true && failedState === false && <Loading />}
        {noData === false && failedState === false && (
          <Success selectedTour={selectedTour} setOpen={setOpen} id={id} />
        )}
        {noData === true && failedState === true && <Failed />}
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        selectedTour={selectedTour}
      />
    </div>
  )
}
export default TourMediaDetails
