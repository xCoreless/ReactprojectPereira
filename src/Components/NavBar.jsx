import { ShoppingBasketIcon } from "lucide-react"

function NavBar () {
    return (
        <header className='flex justify-between p-4 shadow-md'>
            <h1 id="title" className="header" >Frutilla Triste -  Press-on Nails</h1>
            <nav className="gap-5 flex">
                <a  href="#">Info</a>
                <a  href="#">Sets</a>
                <a  href="#">Contacto</a>
                <ShoppingBasketIcon width={20} height={20}/>
                
            </nav>
            
          
        </header>

    )
}

export default NavBar