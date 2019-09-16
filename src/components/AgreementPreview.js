import React from "react";
import parse from "html-react-parser"

export default class AgreementPreview extends React.Component {

  render () {
    const {previewHTML} = this.props
    if (!previewHTML) return null
    const previewJSX = parse(previewHTML)
    return (
      <div className="ui subPanel" id="preview">
        <div className="trimmedPanel">
           {previewJSX}
        </div>
      </div>
    )
  }
}
