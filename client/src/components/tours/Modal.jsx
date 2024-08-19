import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Lambda_URL =
  'https://atmre4czbwlfuvfe2pngkuogni0drcgt.lambda-url.us-west-2.on.aws/'

const Modal = ({ open, onClose, selectedTour }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  //
  const handleSubmit = e => {
    e.stopPropagation()
    const data = {
      tour: selectedTour?.data['Length Banner'],
      name,
      email,
      phone,
    }

    // ------ fetch Lambda URL, send data, reset fileds ----
    const sendData = fetch(Lambda_URL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
    })
    sendData
      .then(res => res.json())
      .then(data => console.log('This is the data', data))
    setName('')
    setEmail('')
    setPhone('')
    navigate('/thank-you')
  }

  return (
    <div
      className={`fixed inset-0 flex flex-col pt-40 items-center transition-colors ${
        open ? 'visible bg-black bg-opacity-40' : 'invisible'
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow transition-all text-zinc-600 my-1 w-[85%] md:w-[70%] max-w-[700px] h-[75%] md:h-[50%] flex flex-col justify-center items-center p-2 md:p-5 ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 w-[100%]">
          <p className="text-lg md:text-2xl font-semibold font-sans my-5">
            {selectedTour?.data['Length Banner']}
          </p>
          <p className="text-3xl md:text-5xl text-sky-700 font-bold font-serif">
            Interested in this package?
          </p>

          <p className="text-md italic">Connect with our team!</p>

          <div className="flex justify-center mt-3">
            {' '}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 justify-start w-[80%]"
            >
              <input
                type="text"
                placeholder="Name"
                className="shadow-inner shadow-zinc-300 rounded-md py-1 px-3"
                onChange={e => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="shadow-inner shadow-zinc-300 rounded-md py-1 px-3"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone"
                className="shadow-inner shadow-zinc-300 rounded-md py-1 px-3"
                onChange={e => setPhone(e.target.value)}
              />

              <textarea
                placeholder="Comments"
                className="shadow-inner shadow-zinc-300 rounded-md py-1 px-3"
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
      <button
        onClick={onClose}
        className="fixed top-10 right-10 md:top-40 md:right-40 border-2 border-transparent bg-sky-600 text-white p-3 rounded-md hover:bg-zinc-900 hover:border-white hover:scale-105 transition-all"
      >
        X
      </button>
    </div>
  )
}

export default Modal
