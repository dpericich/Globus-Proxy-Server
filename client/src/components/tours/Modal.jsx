import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Safe Travels_LOGO FINAL.png'
import { reverseDate } from '../../utils/helpers'

const Modal = ({ open, onClose, selectedTour, priceDates }) => {
  //
  const navigate = useNavigate()
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [comments, setComments] = useState('')
  const [selectedItems, setSelectedItems] = useState([])

  const inputs = [
    { onChange: setClientName, placeholder: 'name' },
    { onChange: setClientEmail, placeholder: 'email' },
    { onChange: setPhone, placeholder: 'phone' },
    { onChange: setLocation, placeholder: 'your city, state, country' },
    {
      onChange: setTime,
      placeholder: 'best time to contact you?',
    },
  ]
  //
  const checkboxes = [
    {
      id: 1,
      label:
        'Airfare to start of tour (Tours NOT inclusive of air travel to start point)',
    },
    { id: 2, label: 'Tour extensions' },
    { id: 3, label: 'Insurance Coverage' },
    { id: 4, label: 'General Trip Questions' },
    { id: 5, label: 'Global Travel Host (security concierge accompaniment)' },
  ]
  //
  const handleChecks = e => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, e.target.value])
    } else {
      setSelectedItems([
        ...selectedItems.filter(item => item.label !== e.target.value),
      ])
    }
  }
  //
  const handleSubmit = e => {
    e.preventDefault()
    fetch('https://b3v2vw4uvg.execute-api.us-west-2.amazonaws.com/send-email', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderName: 'info@safetravelsgg.com',
        senderEmail: 'info@safetravelsgg.com',
        message: comments,
        clientName: clientName,
        clientEmail: clientEmail,
        phone: phone,
        location: location,
        time: time,
        date: date,
        tour: selectedTour?.data['Length Banner'],
        additionalInfo: selectedItems,
      }),
    })
    navigate('/thank-you')
  }

  return (
    <div
      className={`fixed inset-0 z-10 flex flex-col pt-5 md:pt-5 items-center transition-colors ${
        open ? 'visible bg-black bg-opacity-40' : 'invisible'
      }`}
    >
      <div
        className={`bg-zinc-100 rounded-xl transition-all text-zinc-600 w-[85%] md:w-[70%] max-w-[750px] h-[95%] overflow-y-scroll flex flex-col p-2 md:p-5 border-8 shadow-inner ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className="flex justify-center items-center w-[100%]">
          <div className="w-[20%]"></div>
          <div className="flex justify-center w-[60%]">
            <img className="h-[40px] md:h-20 md:w-40" src={logo}></img>
          </div>
          <div className="flex justify-end w-[20%]">
            <button
              onClick={onClose}
              className="flex justify-center items-center text-zinc-700 text-sm font-medium p-3 rounded h-[30px] border-4 hover:bg-zinc-300 hover:border-zinc-400 hover:scale-105 transition-all"
            >
              X
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[100%]">
          <p className="text-3xl md:text-5xl mt-3 text-sky-700 font-bold font-serif">
            Interested in this package?
          </p>
          <p className="text-md px-3 md:text-2xl font-semibold font-sans my-3">
            {selectedTour?.data['Length Banner']}
          </p>

          <p className="text-md">Connect with our team!</p>

          <div className="flex justify-center mt-2">
            {' '}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 md:gap-4 justify-start h-[100%] w-[90%] md:w-[80%]"
            >
              {/* -------------- Standard Inputs --------------- */}
              {inputs.map((item, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={item.placeholder}
                  className="text-xs md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3"
                  onChange={e => item.onChange(e.target.value)}
                />
              ))}

              {/* -------------- Date --------------- */}

              <select
                value={date}
                onChange={e => setDate(e.target.value)}
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3"
              >
                <option>Please select preferred start date</option>
                {priceDates?.data?.map((item, i) => (
                  <>
                    {item.status === 'Available' ? (
                      <option key={i} className="border-4 text-black">
                        {`Start: ${reverseDate(
                          item.landStartDate.slice(0, 10)
                        )}`}
                      </option>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </select>
              {/* -------------- Checkboxes --------------- */}
              <p className="text-sm md:text-[12pt] text-left text-zinc-600 font-bold mt-3">
                I would like additional information/assistance regarding:
              </p>
              {checkboxes.map((item, i) => (
                <div key={i} className="text-left">
                  <label>
                    <input
                      type="checkbox"
                      value={item.label}
                      onChange={handleChecks}
                      className=""
                    />
                    <span className="text-sm pl-2">{item.label}</span>
                  </label>
                </div>
              ))}

              {/* -------------- Comments --------------- */}
              <textarea
                placeholder="Comments"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3 mt-3"
                onChange={e => setComments(e.target.value)}
              ></textarea>

              <div className="flex justify-end">
                <button className="rounded-md p-3 text-white bg-sky-700 shadow-md shadow-zinc-400 w-[100%] md:w-[50%] hover:bg-sky-800 hover:scale-105 transition-all text-xl mt-3">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
