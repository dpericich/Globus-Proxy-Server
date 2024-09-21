// This modal uses the same AWS Lambda url as the tour inquiryy form. Only difference is there is no Tour Name provided. The Lambda doesn't mind this and sends what data it does have.
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Safe Travels_LOGO FINAL.png'

const FailedModal = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [comments, setComments] = useState('')
  //

  const inputs = [
    { placeholder: 'Name', onChange: setName },
    { placeholder: 'Email', onChange: setEmail },
    { placeholder: 'Phone', onChange: setPhone },
    { placeholder: 'Your Location', onChange: setLocation },
    { placeholder: 'Best time to connect', onChange: setTime },
  ]
  //
  const handleSubmit = e => {
    e.preventDefault()
    fetch('https://6lp5x7v334.execute-api.us-west-2.amazonaws.com/send-email', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderName: 'scott@skywax.com',
        senderEmail: 'scott@skywax.com',
        message: comments,
        clientName: name,
        clientEmail: email,
        phone: phone,
        location: location,
        time: time,
        date: date,
      }),
    })

    navigate('/thank-you')
  }

  return (
    <div
      className={`fixed inset-0 flex flex-col pt-5 md:pt-10 items-center transition-colors ${
        open ? 'visible bg-black bg-opacity-40' : 'invisible'
      }`}
    >
      <div
        className={`bg-zinc-100 rounded-xl transition-all text-zinc-600 w-[85%] md:w-[70%] max-w-[750px] h-[97%] md:h-[95%] flex flex-col p-2 md:p-5 border-8 shadow-inner ${
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
              onClick={() => setOpen(!open)}
              className="flex justify-center items-center text-zinc-700 text-sm font-medium p-3 rounded h-[30px] border-4 hover:bg-zinc-300 hover:border-zinc-400 hover:scale-105 transition-all"
            >
              X
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[100%] overflow-y-scroll">
          <p className="text-3xl md:text-5xl mt-3 text-sky-700 font-bold font-serif">
            How can we help?
          </p>

          <p className="text-md mt-3">Connect with our team!</p>

          <div className="flex justify-center mt-2">
            {' '}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 justify-start w-[90%] md:w-[80%]"
            >
              {/* -------------- Standard Inputs --------------- */}
              {inputs.map((item, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={item.placeholder}
                  className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3"
                  onChange={e => item.onChange(e.target.value)}
                />
              ))}

              {/* -------------- Date --------------- */}
              <select
                value={date}
                onChange={e => setDate(e.target.value)}
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3"
              >
                <option>When would you like to travel?</option>
                <option value={'Within 6 months'}>Within 6 months</option>
                <option value={'6-12 months'}>6-12 months</option>
                <option value={'Not sure yet'}>Not sure yet.</option>
              </select>

              {/* -------------- Comments --------------- */}
              <textarea
                placeholder="What kind of trip are you looking for?"
                className="text-sm md:text-md shadow-inner shadow-zinc-300 rounded-md p-2 md:px-3"
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

export default FailedModal

// const handleSubmit = e => {
//   e.stopPropagation()

//   const data = {
//     name,
//     email,
//     phone,
//     location,
//     time,
//     date,
//     comments,
//   }

//   // ------ fetch Lambda URL, send data, reset fileds ----
//   const sendData = fetch(
//     'https://6lp5x7v334.execute-api.us-west-2.amazonaws.com/send-email',
//     {
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       body: JSON.stringify(data),
//     }
//   )
//   sendData
//     .then(res => res.json())
//     .then(data => console.log('This is the data', data))

//   setName('')
//   setEmail('')
//   setPhone('')
//   setLocation('')
//   setTime('')
//   setDate('')
//   setComments('')
//   navigate('/thank-you')
// }
