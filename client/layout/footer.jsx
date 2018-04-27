// import className from '../assets/styles/footer.styl'
import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'Steve Wei'
    }
  },
  render () {
    return (
      // 使用cssModule的配置
      // <div id={className.footer}>
      //  <span>Written by {this.author}</span>
      // </div>
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
