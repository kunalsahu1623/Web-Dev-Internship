function handleClick() {
    alert("button clicked")
}

function handleFormsubmit() {
   alert("Your form submitted")
}

function EventHandle() {
      return (
        <div>
            <button onClick={() => handleClick()} >Click</button>

            <br /><br />

            <form onSubmit={() => handleFormsubmit()} >
                <label>Enter your name</label>
                <input type="string" required/> <br />

                <button>Submit form</button>
            </form>

        </div>
      )
}

export{ EventHandle }