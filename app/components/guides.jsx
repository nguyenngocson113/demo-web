import React, { Component, PropTypes } from 'react'
import APIgetContent from './API'

class Guides extends Component {
  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }
  state = {
    body: '',
    headline: '',
    abstract: '',
    filename: '',
    contentClassification: '',
    caption: '',
    name: '',
    baseurl: '',
    didfilename: ''
  }
  componentWillMount() {
    APIgetContent.getContent((data) => {
      const {
        data: {
          body,
          headline,
          abstract,
          contentClassification,
          owner: {
            name,
            baseurl
            },
          storyimages
          }
      } = data
      const [ {
      filename,
      caption
      } ] = storyimages
      this.setState({
        body,
        headline,
        abstract,
        filename,
        caption,
        contentClassification,
        name,
        baseurl })
    })
    // const { flux, i18n } = this.context
    //
    // return flux.getActions('helmet')
    //   .update({ title: i18n('guides.page-title') })
  }
  componentDidMount() {
    APIgetContent.getContent((data) => {
      const {
        data: {
          storyimages
          }
      } = data
      const [ {
      filename
      } ] = storyimages
      console.log(filename)
      this.setState({
        didfilename: filename
      })
    })
  }
  render() {
    const {
      body = '',
      headline = '',
      abstract = '',
      filename = '',
      contentClassification = '',
      caption = '',
      name = '',
      baseurl = '',
      didfilename = ''
    } = this.state
    return (
      <div className='MyComponent'>
        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />
        <div className='row wrapper'>
          <div className='col-lg-9 col-md-6 col-sm-12'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 col-sm-12'>
                <div className='MyComponent-img'><img alt='title' src={ filename } /></div>
                <div>{ caption }</div>
                <div>
                  <div className='MyComponent-field'>{ contentClassification } </div>
                  <h1 className='MyComponent-title'>{ headline } </h1>
                  <div dangerouslySetInnerHTML={ { __html: abstract } } /></div>
                <p>
                  <strong>
                    <strong>
                      By { name } <br />
                      From <a href={ `http://${baseurl}` } >{ name }</a>
                    </strong>
                  </strong>
                </p>
                <div className='MyComponent-body' dangerouslySetInnerHTML={ { __html: body } } />
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <img alt='title' src={ didfilename } />
          </div>
        </div>
      </div>
    )
  }

}

export default Guides
