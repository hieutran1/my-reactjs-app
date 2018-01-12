import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(`Textbox: ${this.textboxValue.value}
           Textarea: ${this.textareaValue.value}
           Select: ${this.selectValue.value}
           File: ${this.fileInput.files.length > 0 ? this.fileInput.files[0].name: ''}
           Multiple input: isGoing ${this.isGoing.checked} - numberOfGuestsing: ${this.numberOfGuestsing.value}
        `);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Textbox:
          <input type="text" ref={(input) => this.textboxValue = input} defaultValue="Bob" />
        </label>
        <br/>

        <label>
          Textarea:
          <textarea ref={(input) => this.textareaValue = input} />
        </label>
        <br />

        <label>
          File:
          <select multiple={true} ref={(input) => this.selectValue = input} defaultValue={['Lime', 'Coconut']} >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />

        <label>
          Upload file:
          <input type="file" ref={input => this.fileInput = input} />
        </label>
        <br />

        <label>
          multiple Inputs:
          <input
            name="isGoing"
            type="checkbox"
            ref={(input) => this.isGoing = input} 
            defaultChecked={true}/>

          <input
            name="numberOfGuests"
            type="number"
            ref={(input) => this.numberOfGuestsing = input}
            defaultValue="2" />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root-test')
)
