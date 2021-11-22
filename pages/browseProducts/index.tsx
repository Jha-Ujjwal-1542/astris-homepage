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
                    <div className="sectionTitle center">
                        <div className="subTitle">BROWSE THROUGH OUR COLLECTIONS</div>
                        <div className="mainTitle">
                            <h3>Extensive Range of Assisted Care Products</h3>
                        </div>
                    </div>
                    <div className="productsItembox" id="productsItembox">
                        {productNames.map( prod => (
                            <div className="productsItem" key={prod.id}>
                                <Link href="#">
                                    <a title="Item Title" className="links">
                                        <div className="productsItemimg">
                                            <figure>
                                                <Image src={prod.image} width={prod.wd} height={prod.ht} alt ="product" />
                                            </figure>
                                        </div>
                                        <div className="productsItemtitle">
                                            <div className="title">{ prod.title }</div>
                                        </div>
                                    </a>
                                </Link>                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default products