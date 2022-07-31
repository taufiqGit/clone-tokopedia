
export default function ItemPerMenuCat({ title, data }) {

    return (
        <div className="mt-4">
            <h2 className="text-black-1 font-semibold">{title}</h2>
            {
                data.map((item, idx)=> (
                    <span className="block text-sm text-gray-3 my-1" key={idx}>{item}</span>
                ))
            }
        </div>
    )
}