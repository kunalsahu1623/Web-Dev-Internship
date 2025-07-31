import { About } from "./About.js";
import { Skills } from "./Skills.js";
import { App } from "./App.js";
function Contact() {
  return (
    <div className="contact">
      <App />
      <About />
      <Skills />
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /> </form>

      <form>    <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /> </form>

      <form>  <label htmlFor="query">Query:</label>
        <input id="Query" name="Query" required></input> </form>

       <div>
        <button type="submit">Submit</button>
       </div>


      <h3>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</h3>
      <p>Email:k31145388@gmail.com</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/kunal-sahu-4973232a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Kunal Sahu</a></p>
      <p>GitHub: <a href="https://github.com/kunalsahu1623">kunalsahu1623</a></p>
    </div>
  );
}
export { Contact };