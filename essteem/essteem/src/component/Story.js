import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({})
  const [story, setMessage] = useState("")

  const handleInput = (e) => {
    const copyFormData = { ...formData }
    copyFormData[e.target.name] = e.target.value
    setFormData(copyFormData)
  }

  const sendData = async (e) => {
    e.preventDefault()
    const { name, email, story } = formData
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/josephineamos/google_sheets/NLrRnNYIBYubSRYL?tabId=Story",
        {
          method: "post",
          body: JSON.stringify([[name, email, story]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      const json = await response.json()
      console.log("Success:", JSON.stringify(json))
      setMessage("Success")
    } catch (error) {
      console.error("Error:", error)
      setMessage("Error")
    }
  }

  return (
    <div className="App">
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        onSubmit={sendData}
      >
        <h1>Contact Sign Up</h1>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />
        <textarea name="story" placeholder="Story" onChange={handleInput} />
        <input name="submit" type="submit" value="Send" />
        {story}
      </form>
    </div>
  )
}
