import axios from 'axios'

const LINK = 'http://localhost:3000/api/data'
export default {
  getContent(cb) {
    axios.get(LINK)
      .then((data) => {
        cb(data)
      }).catch((err) => {
        console.log(err)
      })
  }
}
