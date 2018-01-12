import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textboxValue: '',
      textareaValue: '',
      selectValue: ['coconut', 'lime'],
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleTextboxChange = this.handleTextboxChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleMultipleInputChange = this.handleMultipleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextboxChange(event) {
    this.setState({textboxValue: event.target.value});
  }
  
  handleTextareaChange(event) {
    this.setState({textareaValue: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({selectValue: event.target.value});
  }

  handleMultipleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    alert(`Textbox: ${this.state.textboxValue}
           Textarea: ${this.state.textareaValue}
           Select: ${this.state.selectValue}
           File: ${this.fileInput.files.length > 0 ? this.fileInput.files[0].name: ''}
        `);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Textbox:
          <input type="text" value={this.state.textboxValue} onChange={this.handleTextboxChange} />
        </label>
        <br/>

        <label>
          Textarea:
          <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange} />
        </label>
        <br />

        <label>
          File:
          <select multiple={true} value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />

        <label>
          Upload file:
          <input
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
          />
        </label>
        <br />

        <label>
          multiple Inputs:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleMultipleInputChange} />

          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleMultipleInputChange} />
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
