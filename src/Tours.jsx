/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-04-29 10:43:15
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-04-29 15:08:53
 * @FilePath: /tour/src/Tours.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Tour from "./Tour"
const Tours=({tours,removeTours})=>{
  return (
    <section>
      <div className="title">
        <h2> our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour)=>{
          return (
            <Tour key={tour.id}{...tour} removeTour={removeTours}></Tour>
          )
        })}
      </div>
    </section>
  )
}

export default Tours