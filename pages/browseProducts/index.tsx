import Image from "next/image"
import Link from "next/link"
import productNames from '../../src/datas/products.json'

export const getStaticProps = async () => {
    const res = "../src/datas/products.json"
    // const data = await res.json()
    console.log(res)
    return{
       props: { productsNames : [] }
    }
}

const products = () => {
    return(
        <section className="productsSection">
            <div className="container">
                <div className="sectionBox">
                    <div className="sectionTitle text-center">
                        <div className="subTitle capitalize">BROWSE THROUGH OUR COLLECTIONS</div>
                        <div className="mainTitle">
                            <h3>Extensive Range of Assisted Care Products</h3>
                        </div>
                    </div>
                    <div className="productsItembox">
                            {productNames.map( prod => (
                                <div className="productsItem" key={prod.id}>
                                    <div className="productsItemimage">
                                        <figure>
                                            <Image src={prod.image} width={prod.wd} height={prod.ht} alt ="" />
                                        </figure>
                                    </div>
                                    <div className="productsItemtitle">
                                        <div className="title">
                                            <span>{ prod.title }</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default products