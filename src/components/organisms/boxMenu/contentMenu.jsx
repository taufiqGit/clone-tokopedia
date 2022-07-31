import iconBook from '../../../img/book-icon.png'
import ItemPerMenuCat from '../../molecules/itemPerMenuCat'

export default function ContentMenu(params) {
    const SideMenu1 = { title: 'Aritektur & Desain', data: ['Buku 1', 'Buku 2', 'Buku 3', 'Buku 4', 'Buku 5', 'Buku 6']}
    const SideMenu2 = { title: 'Resep Makanan', data: ['Resep 1', 'Resep 2', 'Resep 3', 'Resep 4', 'Resep 5', 'Resep 6']}
    const SideMenu3 = { title: 'Kamus', data: ['Kamus 1','Kamus 2', 'Kamus 3', 'Kamus 4', 'Kamus 5', 'Kamus 6']}
    const SideMenu4 = { title: 'Majalah', data: ['Majalah 1', 'Majalah 2', 'Majalah 3', 'Majalah 4', 'Majalah 5', 'Majalah 6']}
    const SideMenu5 = { title: 'Komik', data: ['Komik 1', 'Komik 2', 'Komik 3', 'Komik 4', 'Komik 5', 'Komik 6']}
    return(
        <div className='w-full p-10 h-full overflow-y-scroll '>
            <div className='flex items-center'>
                <img className='w-10' src={iconBook} alt="sss" />
                <h2 className='font-semibold text-2xl ml-1'>Buku</h2>
            </div>
            <div className='grid grid-cols-5'>
                <ItemPerMenuCat title={SideMenu1.title} data={SideMenu1.data}/>
                <ItemPerMenuCat title={SideMenu2.title} data={SideMenu2.data}/>
                <ItemPerMenuCat title={SideMenu3.title} data={SideMenu3.data}/>
                <ItemPerMenuCat title={SideMenu4.title} data={SideMenu4.data}/>
                <ItemPerMenuCat title={SideMenu5.title} data={SideMenu5.data}/>
                <ItemPerMenuCat title={SideMenu1.title} data={SideMenu1.data}/>
                <ItemPerMenuCat title={SideMenu2.title} data={SideMenu2.data}/>
                <ItemPerMenuCat title={SideMenu3.title} data={SideMenu3.data}/>
                <ItemPerMenuCat title={SideMenu4.title} data={SideMenu4.data}/>
                <ItemPerMenuCat title={SideMenu5.title} data={SideMenu5.data}/>
                <ItemPerMenuCat title={SideMenu1.title} data={SideMenu1.data}/>
                <ItemPerMenuCat title={SideMenu2.title} data={SideMenu2.data}/>
                <ItemPerMenuCat title={SideMenu3.title} data={SideMenu3.data}/>
                <ItemPerMenuCat title={SideMenu4.title} data={SideMenu4.data}/>
                <ItemPerMenuCat title={SideMenu5.title} data={SideMenu5.data}/>
            </div>
        </div>
    )
}