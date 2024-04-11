import React from "react"
import { memo} from "react"
import Header from "../theme/header"
import Footer from "../theme/footer"

const MasterLayout = ({children, ...props}) => {
    return( 
    <div {...props}>
    <Header />
    {children}
    <Footer />
    </div>
)}

export default memo(MasterLayout)