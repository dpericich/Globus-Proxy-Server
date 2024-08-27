import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// const Lambda_URL =
//   'https://akxkf4hwkh5gntryfwrqsvfyve0ixlro.lambda-url.us-west-2.on.aws/'

const Modal = ({ open, setOpen }) => {
  const navigate = useNavigate()
  // const [open, setOpen] = useState(false)
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
      className={`fixed inset-0 flex flex-col pt-20 items-center transition-colors ${
        open ? 'visible bg-black bg-opacity-40' : 'invisible'
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow transition-all text-zinc-600 my-1 w-[85%] md:w-[70%] max-w-[700px] h-[100%] md:h-[70%] flex flex-col justify-center items-center p-2 md:p-5 ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className="flex justify-end w-[100%]">
          <button
            onClick={() => setOpen(!open)}
            className="border-2 border-transparent bg-sky-600 text-white p-3 rounded-md hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all"
          >
            X
          </button>
        </div>

        <div className="flex flex-col gap-4 w-[100%]">
          <p className="text-3xl md:text-5xl text-sky-700 font-bold font-serif">
            How can we help?
          </p>

          <p className="text-xl italic">Connect with our team!</p>

          <div className="flex justify-center mt-3">
            {' '}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-start w-[80%]"
            >
              <input
                type="text"
                placeholder="Name"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="US City (or country) you are located"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setLocation(e.target.value)}
              />
              <input
                type="text"
                placeholder="Best time (locally) for us to connect"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setTime(e.target.value)}
              />

              <textarea
                placeholder="What kind of trip are you looking for?"
                className="shadow-inner shadow-zinc-300 rounded-md p-3"
                onChange={e => setComments(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button className="rounded-md p-3 text-white bg-sky-700 w-[100%] md:w-[50%] hover:bg-sky-200 hover:text-sky-500 transition-all text-xl mt-3">
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
