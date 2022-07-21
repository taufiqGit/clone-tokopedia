import sd from '../../../img/7.png'

export default function TopUp() {
    return (
        <section className='container mx-auto max-w-screen-xl px-10 mt-8 '>
            <div className='shadow-1 rounded-lg p-3'>
                <div className='flex'>
                    <div>
                        <h2 className='text-black-1 text-lg font-extrabold'>Kategori Pilihan</h2>
                        <div>
                            <div className="">
                                <img src={sd} alt="ellu" />
                                <p>Makanan Kering</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    <h2>Top Up & Tagihan <span>Lihat Semua</span></h2>
                        <div>

                        </div>
                    </div>
                </div>                
            </div>

        </section>
    )
}