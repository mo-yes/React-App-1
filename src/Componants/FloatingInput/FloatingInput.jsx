

import "./FloatingInput.css"
import Button from "../Button/Button"


export default function FloatingInput() {
  return (
<form>
  <div className="form-floating mb-3">
    <input type="text" className="form-control" id="nameInput" placeholder="Name" />
    <label htmlFor="nameInput">Name</label>
  </div>
  <div className="form-floating mb-3">
    <input type="email" className="form-control" id="emailInput" placeholder="Email" />
    <label htmlFor="Email">Email</label>
  </div>
  <div className="form-floating mb-3">
    <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
    <label htmlFor="Email">Password</label>
  </div>
  <div className="form-floating mb-3">
    <textarea className="form-control" id="Message" placeholder="Message" />
    <label htmlFor="Email">Message</label>
  </div>
  <Button />
</form>

  )
}
