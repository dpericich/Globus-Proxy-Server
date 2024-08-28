import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Safe Travels_LOGO FINAL.png'

const Modal = ({ open, onClose, selectedTour }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [comments, setComments] = useState('')
  //
  const handleSubmit = e => {
    e.stopPropagation()
    const data = {
      tour: selectedTour?.data['Length Banner'],
      name,
      email,
      phone,
      location,
      time,
      comments,
    }

    // ------ fetch Lambda URL, send data, reset fileds ----
    const sendData = fetch(
      'https://akxkf4hwkh5gntryfwrqsvfyve0ixlro.lambda-url.us-west-2.on.aws/',
      {
        method: 'POST',
        // mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
      }
    )
    sendData
      .then(res => res.json())
      .then(data => console.log('This is the data', data))

    setName('')
    setEmail('')
    setPhone('')
    setLocation('')
    setTime('')
    setComments('')
    navigate('/thank-you')
  }

  return (
    <div
      className={`fixed inset-0 flex flex-col pt-5 md:pt-10 items-center transition-colors ${
        open ? 'visible bg-black bg-opacity-40' : 'invisible'
      }`}
    >
      <div
        className={`bg-zinc-100 rounded-xl transition-all text-zinc-600 w-[85%] md:w-[70%] max-w-[750px] h-[97%] md:h-[80%] flex flex-col p-2 md:p-5 border-8 shadow-inner ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className="flex justify-center items-center">
          <img className="h-[40px] md:h-20 md:w-40" src={logo}></img>
        </div>

        <div className="flex justify-end w-[100%]">
          <button
            onClick={onClose}
            className=" text-zinc-700 text-xl font-bold p-3 rounded-md hover:bg-zinc-400 hover:border-white hover:scale-105 transition-all"
          >
            X
          </button>
        </div>

        <div className="flex flex-col gap-2 w-[100%]">
          <p className="text-2xl md:text-5xl text-sky-700 font-bold font-serif">
            Interested in this package?
          </p>
          <p className="text-md px-3 md:text-2xl font-semibold font-sans my-3">
            {selectedTour?.data['Length Banner']}
          </p>

          <p className="text-xl italic">Connect with our team!</p>

          <div className="flex justify-center mt-2">
            {' '}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-start h-[100%] w-[90%] md:w-[80%]"
            >
              <input
                type="text"
                placeholder="Name"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
                onChange={e => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="US City (or country) you are located"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
                onChange={e => setLocation(e.target.value)}
              />
              <input
                type="text"
                placeholder="Best time (locally) for us to connect"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
                onChange={e => setTime(e.target.value)}
              />

              <textarea
                placeholder="Comments"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:p-3"
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
