import React from "react";

class YearPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.disabled
    };
  }

  handleChange(e) {
    this.props.onYearPickerChange(parseInt(e.target.value));
  }

  createArrayYears(start) {
    var syear = [1, 0];
    var eyear = [0, 1];
    if (start) {
      return syear;
    } else {
      return eyear;
    }
  }

  initializeSelect() {
    var addone = [1, 0];
    // var addone = this.createArrayYears(this.props.start);
    // console.log(addone);
    var yrdiff = new Date().getFullYear() - this.props.yrselect + addone[0];
    if (!this.props.disabled) {
      return (
        <select
          disabled={this.props.disabled}
          onChange={e => this.handleChange(e)}
          className="input-control select pl-3"
        >
          <option>Select a year</option>
          {Array(yrdiff)
            .fill(this.props.yrselect + addone[1])
            .map((val, idx) => (
              <option data-yr={val + idx}> {val + idx} </option>
            ))}
        </select>
      );
    } else {
      return (
        <div className="input-control text pl-3">{this.props.yrselect}</div>
      );
    }
  }

  render() {
    return <div>{this.initializeSelect()}</div>;
  }
}

export default YearPicker;
