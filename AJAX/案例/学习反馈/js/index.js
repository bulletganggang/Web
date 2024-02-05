/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */

axios({
  url: 'http://hmajax.itheima.net/api/province'
}).then(result => {
  const pStr = result.data.list.map(ele => {
    return `<option value="${ele}">${ele}</option>`
  }).join('')
  document.querySelector('.province').innerHTML = pStr
})

document.querySelector('.province').addEventListener('change', e => {
  axios({
    url: 'http://hmajax.itheima.net/api/city',
    params: {
      pname: e.target.value
    }
  }).then(result => {
    const pStr = result.data.list.map(ele => {
      return `<option value="${ele}">${ele}</option>`
    }).join('')
    document.querySelector('.city').innerHTML = pStr

    setAll()
  })
})

document.querySelector('.city').addEventListener('change', e => { setAll() })

function setAll() {
  axios({
    url: 'http://hmajax.itheima.net/api/area',
    params: {
      pname: document.querySelector('.province').value,
      cname: document.querySelector('.city').value
    }
  }).then(result => {
    const pStr = result.data.list.map(ele => {
      return `<option value="${ele}">${ele}</option>`
    }).join('')
    document.querySelector('.area').innerHTML = pStr
  })

}