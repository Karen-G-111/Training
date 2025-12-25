import Image from "next/image";
import style from "./lay.module.css"

export default async function Layout({ children }) {


    return <div>
        <h2>Contact Layout</h2>
        <div className={style.imgCont}>
            <Image
                className={style.img}
                src="/images/testIMG1.jpg"
                alt="women"
                sizes="50000px"
                quality={40}
                fill={true} />
        </div>
        <div>{children}</div>

    </div>
}