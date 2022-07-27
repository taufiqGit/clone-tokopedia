
import imgCat from '../../../img/7.png'

const TxtCat = ({txt, lastTxt})=> (<>{txt} <span className="font-normal">{lastTxt}</span></>)

export default function ItemCategorySlider(params) {
    let txt = 'Makanan Kering'
    let txtToArr = txt.split(' ')
    let lastTxt = txtToArr[txtToArr.length - 1]
    txtToArr.pop()
    txt = txtToArr.join(' ')

    return (
            <div className="h-32 w-32 border flex flex-col justify-center items-center rounded-lg">
                <img className="w-3/5" src={imgCat} alt="ellu" />
                <p className="text-xs text-center mt-2 max-w-[50%] font-semibold text-black-1"><TxtCat txt={txt} lastTxt={lastTxt}/></p>
            </div>
    )
}