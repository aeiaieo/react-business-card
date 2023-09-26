import React from "react"
import Images from "../images/itsme.jpeg"

export default function Headshot() {
    return(
        <div>
            <img alt="dev headshot" loading="lazy" src={Images} />
        </div>
    )
}